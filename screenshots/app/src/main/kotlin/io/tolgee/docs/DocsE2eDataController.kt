package io.tolgee.docs

import io.tolgee.constants.Feature
import io.tolgee.controllers.internal.InternalController
import io.tolgee.controllers.internal.e2eData.AbstractE2eDataController
import io.tolgee.data.StandardTestDataResult
import io.tolgee.development.testDataBuilder.CommunityActivityReplayer
import io.tolgee.development.testDataBuilder.builders.TestDataBuilder
import io.tolgee.ee.component.PublicEnabledFeaturesProvider
import io.tolgee.model.Organization
import io.tolgee.repository.LlmProviderRepository
import io.tolgee.service.organization.OrganizationService
import io.tolgee.service.project.ProjectHardDeletingService
import io.tolgee.service.project.ProjectService
import jakarta.persistence.EntityManager

@InternalController(["internal/e2e-data/docs"])
class DocsE2eDataController(
  private val enabledFeaturesProvider: PublicEnabledFeaturesProvider?,
  private val organizationService: OrganizationService,
  private val entityManager: EntityManager,
  private val projectService: ProjectService,
  private val projectHardDeletingService: ProjectHardDeletingService,
  private val llmProviderRepository: LlmProviderRepository,
) : AbstractE2eDataController() {
  override val testData: TestDataBuilder
    get() = DocsTestData().root

  override fun generate(): StandardTestDataResult {
    enabledFeaturesProvider?.forceEnabled = Feature.entries.toSet()
    return super.generate()
  }

  override fun afterTestDataStored(data: TestDataBuilder) {
    val ownerId =
      data.data.userAccounts
        .single { it.self.username == DocsTestData.OWNER_USERNAME }
        .self.id
    val projectIds = data.data.projects.map { it.self.id }
    spreadSuggestionsOverPastDays(projectIds)
    CommunityActivityReplayer.replay(entityManager, projectIds, ownerId)
  }

  private fun spreadSuggestionsOverPastDays(projectIds: List<Long>) {
    entityManager
      .createNativeQuery(
        """
        update translation_suggestion s
        set created_at = s.created_at - r.n * interval '2 day',
            updated_at = s.updated_at - r.n * interval '2 day'
        from (
          select id, row_number() over (order by id) as n
          from translation_suggestion
          where project_id in (:projectIds)
        ) r
        where r.id = s.id
        """,
      ).setParameter("projectIds", projectIds)
      .executeUpdate()
  }

  override fun cleanup(): Any? {
    val result = super.cleanup()
    enabledFeaturesProvider?.forceEnabled = null
    freeDatasetOrganizationSlugs()
    return result
  }

  private fun freeDatasetOrganizationSlugs() {
    val organizationNames = testData.data.organizations.map { it.self.name }
    entityManager
      .createQuery(
        "from Organization o where o.deletedAt is not null and o.name in :names",
        Organization::class.java,
      ).setParameter("names", organizationNames)
      .resultList
      .forEach {
        projectService.findAllInOrganization(it.id).forEach(projectHardDeletingService::hardDeleteProject)
        llmProviderRepository.deleteAll(llmProviderRepository.getAll(it.id))
        organizationService.deleteHard(it)
      }
  }
}
