import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function AndroidApiRequirement() {
  return (
    <div className="grid grid-cols-1 gap-4 my-6">
      <div className="border border-gray-300 dark:border-gray-500 rounded-lg p-4 bg-gray-100 dark:bg-gray-700/50">
        <div className="flex items-center gap-3">
          <img
            src="/img/docs/sdk/android.svg"
            alt="Android"
            width="40"
            height="40"
          />
          <div>
            <Heading
              as="h4"
              className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-50"
            >
              Android API Level
            </Heading>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-0">
              Minimum{' '}
              <Link
                href="https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels"
                className="text-gray-800 dark:text-gray-100 hover:underline font-medium"
              >
                API Level 21+
              </Link>{' '}
              (Android 5.0 and above)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
