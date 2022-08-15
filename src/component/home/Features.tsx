import React, { ReactNode } from 'react';
import { Feature } from '../pageComponents/Feature';
import { FeaturesContainer } from '../pageComponents/FeaturesContainer';
import ActivityLogImg from '/img/home/features/comp-activity-log.svg';
import InContextImg from '/img/home/features/comp-in-context-translating.svg';
import TranslationMemoryImg from '/img/home/features/comp-translation-memory.svg';
import MachineTranslationsImg from '/img/home/features/comp-machine-translatins.svg';
import AutoTranslationImg from '/img/home/features/comp-auto-translation.svg';
import OneClickScreenshotsImg from '/img/home/features/comp-screenshots.svg';
import {
  ACTIVITY_LOG,
  AUTO_TRANSLATION,
  IN_CONTEXT,
  MACHINE_TRANSLATION,
  ONE_CLICK_SCREENSHOTS,
  TRANSLATION_MEMORY,
} from '../pageComponents/featurePage/hashLinks';

export type FeatureData = {
  title: string;
  text: string;
  image: ReactNode;
  section: string;
  id: string;
};

export const features = [
  {
    title: 'In-context translating',
    text: 'Translate the strings directly in the app you develop. Even in production.',
    image: <InContextImg />,
    section: 'dev-tools',
    id: IN_CONTEXT,
  },
  {
    title: 'Translation memory',
    text: 'Don’t translate the same string twice. Translation memory reuses strings you’ve already translated.',
    image: <TranslationMemoryImg />,
    section: 'translation-assistance',
    id: TRANSLATION_MEMORY,
  },
  {
    title: 'Machine translations',
    text: 'Let the machines work for you. We support DeepL, Google Translate, and AWS translate.',
    image: <MachineTranslationsImg />,
    section: 'translation-assistance',
    id: MACHINE_TRANSLATION,
  },
  {
    title: 'Auto translation',
    text: 'For when you need your translations delivered yesterday, texts are translated automatically right after you add them.',
    image: <AutoTranslationImg />,
    section: 'translation-assistance',
    id: AUTO_TRANSLATION,
  },
  {
    title: 'Activity Log',
    text: 'Your colleagues make mistakes. Watch their activity and blame them with the Activity Log feature.',
    image: <ActivityLogImg />,
    section: 'collaboration',
    id: ACTIVITY_LOG,
  },
  {
    title: 'One-click screenshots',
    text: 'Let users add screenshots with a single click. Translating without context is like driving blindfolded.',
    image: <OneClickScreenshotsImg />,
    section: 'dev-tools',
    id: ONE_CLICK_SCREENSHOTS,
  },
] as FeatureData[];

export const Features = () => {
  return (
    <FeaturesContainer>
      {features.map((f) => (
        <Feature key={f.id} feature={f} />
      ))}
    </FeaturesContainer>
  );
};
