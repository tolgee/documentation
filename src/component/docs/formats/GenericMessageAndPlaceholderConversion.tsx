import React, { ReactNode, FC } from 'react';
import Link from '@docusaurus/Link';

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
        <Link to="/platform/projects_and_organizations/project_settings#tolgee-icu-placeholders">
          project settings
        </Link>
        . We recommend keeping the conversion enabled, as it brings many
        benefits.{' '}
        <Link to="/platform/translation_process/tolgee_universal_icu_placeholders">
          Read more about the benefits of Tolgee Universal ICU placeholders.
        </Link>
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
