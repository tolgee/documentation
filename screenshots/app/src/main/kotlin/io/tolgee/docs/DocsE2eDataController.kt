package io.tolgee.docs

import io.tolgee.component.CurrentDateProvider
import io.tolgee.constants.Feature
import io.tolgee.controllers.internal.InternalController
import io.tolgee.controllers.internal.e2eData.AbstractE2eDataController
import io.tolgee.data.StandardTestDataResult
import io.tolgee.development.testDataBuilder.builders.TestDataBuilder
import io.tolgee.ee.component.PublicEnabledFeaturesProvider
import io.tolgee.model.Organization
import io.tolgee.service.organization.OrganizationService
import io.tolgee.service.project.ProjectHardDeletingService
import io.tolgee.service.project.ProjectService
import jakarta.persistence.EntityManager
import java.time.Instant
import java.util.Date

@InternalController(["internal/e2e-data/docs"])
class DocsE2eDataController(
  private val currentDateProvider: CurrentDateProvider,
  private val enabledFeaturesProvider: PublicEnabledFeaturesProvider,
  private val organizationService: OrganizationService,
  private val entityManager: EntityManager,
  private val projectService: ProjectService,
  private val projectHardDeletingService: ProjectHardDeletingService,
) : AbstractE2eDataController() {
  override val testData: TestDataBuilder
    get() = DocsTestData().root

  override fun generate(): StandardTestDataResult {
    currentDateProvider.forcedDate = Date.from(Instant.parse(PINNED_DATE))
    enabledFeaturesProvider.forceEnabled = Feature.entries.toSet()
    return super.generate()
  }

  override fun cleanup(): Any? {
    val result = super.cleanup()
    currentDateProvider.forcedDate = null
    enabledFeaturesProvider.forceEnabled = null
    val data = DocsTestData().root.data
    val names = data.organizations.map { it.self.name } + data.userAccounts.map { it.self.name }
    entityManager
      .createQuery("from Organization o where o.deletedAt is not null and o.name in :names", Organization::class.java)
      .setParameter("names", names)
      .resultList
      .forEach {
        projectService.findAllInOrganization(it.id).forEach(projectHardDeletingService::hardDeleteProject)
        entityManager
          .createNativeQuery("delete from llm_provider where organization_id = :id")
          .setParameter("id", it.id)
          .executeUpdate()
        organizationService.deleteHard(it)
      }
    return result
  }

  companion object {
    const val PINNED_DATE = "2026-01-15T10:00:00Z"
  }
}
