package io.tolgee.docs

import io.tolgee.component.CurrentDateProvider
import io.tolgee.constants.Feature
import io.tolgee.controllers.internal.InternalController
import io.tolgee.controllers.internal.e2eData.AbstractE2eDataController
import io.tolgee.data.StandardTestDataResult
import io.tolgee.development.testDataBuilder.builders.TestDataBuilder
import io.tolgee.ee.component.PublicEnabledFeaturesProvider
import java.time.Instant
import java.util.Date

@InternalController(["internal/e2e-data/docs"])
class DocsE2eDataController(
  private val currentDateProvider: CurrentDateProvider,
  private val enabledFeaturesProvider: PublicEnabledFeaturesProvider,
) : AbstractE2eDataController() {
  override val testData: TestDataBuilder
    get() = DocsTestData().root

  override fun generate(): StandardTestDataResult {
    currentDateProvider.forcedDate = Date.from(Instant.parse(PINNED_DATE))
    enabledFeaturesProvider.forceEnabled = Feature.entries.toSet()
    return super.generate()
  }

  companion object {
    const val PINNED_DATE = "2026-01-15T10:00:00Z"
  }
}
