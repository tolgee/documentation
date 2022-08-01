import React, {useEffect} from "react";
import Head from "@docusaurus/Head";
import baseSchema from "../info/organization";
import DecoratedLayout from "../theme/DecoratedLayout";
import {Features} from "../component/home/Features";
import {Technologies} from "../component/home/Technologies";
import {References} from "../component/home/References";
import {Pricing} from "../component/home/Pricing";
import {NotConvincedYet} from "../component/home/NotConvincedYet";
import {EmphasisPageHeader} from "../component/pageComponents/header/EmphasisPageHeader";
import {ImageColumn} from "../component/pageComponents/twoColumnSection/ImageColumn";
import {TextColumn, TextColumnText, TextColumnTitle} from "../component/pageComponents/twoColumnSection/TextColumn";
import {GradientText} from "../component/GradientText";
import HeroLight from '../component/home/HeroLight.svg'

function Home() {

  useEffect(() => {
    let initialPageX: number;
    let initialPageY: number;

    document.addEventListener("mousemove", parallax);
    function parallax(event) {
      if (typeof initialPageY === 'undefined' || typeof initialPageX === 'undefined') {
        initialPageX = event.pageX;
        initialPageY = event.pageY;
      }

      this.querySelectorAll(".hero-svg__parallax").forEach((shift) => {
        const positionX = shift.getAttribute("data-parallax-x");
        const positionY = shift.getAttribute("data-parallax-y");

        const moveX = event.pageX - initialPageX
        const moveY = event.pageY - initialPageY

        const x = (moveX * positionX) / 90;
        const y = (moveY * positionY) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    return () => document.removeEventListener("mousemove", parallax);
  }, [])

  return (
    <div className="home__container">
      <Head>
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <div className="text-home-text">
          <EmphasisPageHeader title="Perfect translation." title2="Users everywhere."/>
          <section
            className="flex items-center md:max-w-[1500px] mx-auto md:min-h-[600locapx] ">
            <div className="flex gap-12 sm:m-12 m-8 flex-col lg:flex-row">
              <ImageColumn>
                <HeroLight className="hero-svg"/>
              </ImageColumn>
              <TextColumn className="min-w-[300px] lg:items-end md:items-center md:text-center lg:text-left">
                <TextColumnTitle>Revolution is here.</TextColumnTitle>
                <TextColumnText>
                  Integrate Tolgee into your App in minutes.
                  Speed up your translation process by <GradientText>90%</GradientText> by using Tolgee <GradientText>revolutionary</GradientText> integrations.
                  Let your <GradientText>mama</GradientText> translate your App with in-context localization feature.
                </TextColumnText>
              </TextColumn>
            </div>
          </section>
          <Features/>
          <Technologies/>
          <References/>
          <Pricing/>
          <NotConvincedYet/>
        </div>
      </DecoratedLayout>
    </div>
  );
}

export default Home;
