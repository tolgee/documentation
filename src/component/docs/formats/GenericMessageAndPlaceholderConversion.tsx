import React, { ReactNode, FC } from 'react';

export const GenericMessageAndPlaceholderConversion: FC<{
  formatName: string;
  placeholderExamples: ReactNode;
}> = ({ formatName, placeholderExamples }) => {
  return (
    <>
      <p>
        When importing data to Tolgee from the {formatName} files, you can
        either enable or disable the conversion to the Tolgee Universal ICU
        placeholders. The conversion is enabled by default. You can also disable
        the conversion globally in the{' '}
        <a href="/platform/projects_and_organizations/project_settings#tolgee-universal-icu-placeholders-support">
          project settings
        </a>
        . We recommend keeping the conversion enabled, as it brings many
        benefits.{' '}
        <a href="/platform/translation_process/tolgee_universal_icu_placeholders">
          Read more about the benefits of Tolgee Universal ICU placeholders.
        </a>
      </p>
      <p>
        When the conversion is disabled, the original placeholders (e.g.,{' '}
        {placeholderExamples}). are preserved. The message format is
        automatically detected when importing data in {formatName} format. When
        exporting, you can choose from message & placeholder formats listed
        above.
      </p>
    </>
  );
};
