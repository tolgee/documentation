import React, {FC} from "react";
import {Feature} from "../pageComponents/Feature";
import {FeaturesContainer} from "../pageComponents/FeaturesContainer";

type FeatureData = {
  title: string,
  text: string,
  imageUrl: string
  slug: string
}

export const features = [
  {
    title: "In-context translating",
    text: "Translate the strings directly in the app you develop.",
    imageUrl: "/img/home/features/comp-in-context-translating.svg",
    slug: "in-context"
  },
  {
    title: "Translation memory",
    text: "Don’t translate same string twice. Translation memory reuses strings you already translated.",
    imageUrl: "/img/home/features/comp-translation-memory.svg",
    slug: "translation-memory"
  },
  {
    title: "Machine translations",
    text: "Let the machines work for you.",
    imageUrl: "/img/home/features/comp-machine-translatins.svg",
    slug: "machine-translations"
  },
  {
    title: "Auto translation",
    text: "When you need your translations delivered yesterday. Texts are translated right after you add them.",
    imageUrl: "/img/home/features/comp-auto-translation.svg",
    slug: "auto-translation"
  },
  {
    title: "Activity log",
    text: "Your colleagues make mistakes. Watch their activity and blame them with activity log feature.",
    imageUrl: "/img/home/features/comp-activity-log.svg",
    slug: "activity-log"
  },
  {
    title: "One-click screenshots",
    text: "Let users add screenshots with single click. Translating without context is like driving blindfolded.",
    imageUrl: "/img/home/features/comp-screenshots.svg",
    slug: "one-click-screenshots"
  },
] as FeatureData[]

export const Features = () => {

  return (
    <FeaturesContainer>
      {features.map(f => <Feature key={f.slug} feature={f}/>)}
    </FeaturesContainer>
  );
}
