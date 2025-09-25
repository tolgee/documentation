import React from 'react';
import Heading from '@theme/Heading';

interface Feature {
  emoji: string;
  title: string;
  description: string;
  colorTheme: 'blue' | 'green' | 'purple' | 'orange';
}

interface FeatureGridProps {
  features: Feature[];
}

const colorClasses = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    border: 'border-gray-200 dark:border-gray-700',
    title: 'text-blue-800 dark:text-blue-200',
    text: 'text-blue-700 dark:text-blue-300',
  },
  green: {
    bg: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
    border: 'border-gray-200 dark:border-gray-700',
    title: 'text-green-800 dark:text-green-200',
    text: 'text-green-700 dark:text-green-300',
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
    border: 'border-gray-200 dark:border-gray-700',
    title: 'text-purple-800 dark:text-purple-200',
    text: 'text-purple-700 dark:text-purple-300',
  },
  orange: {
    bg: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
    border: 'border-gray-200 dark:border-gray-700',
    title: 'text-orange-800 dark:text-orange-200',
    text: 'text-orange-700 dark:text-orange-300',
  },
};

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {features.map((feature, index) => {
        const colors = colorClasses[feature.colorTheme];
        return (
          <div
            key={index}
            className={`border ${colors.border} rounded-xl p-6 ${colors.bg}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{feature.emoji}</span>
              <Heading
                as="h2"
                className={`text-xl font-semibold ${colors.title} mb-0`}
              >
                {feature.title}
              </Heading>
            </div>
            <div
              className={colors.text}
              dangerouslySetInnerHTML={{ __html: feature.description }}
            />
          </div>
        );
      })}
    </div>
  );
}
