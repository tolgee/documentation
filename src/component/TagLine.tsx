import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const weapons = ["JS", "React", "Angular", "Next.js", "Gatsby", "PHP", "Dart"];
const getRandomWeapon = (ignored?: string) => {
  while (true) {
    const newWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    if (newWeapon !== ignored) {
      return newWeapon;
    }
  }
};

const getDefaultWeapon = (ignored?: string) =>
  typeof window === "undefined" ? weapons.join(",") : getRandomWeapon(ignored);

export const TagLine = () => {
  const [weapon1, setWeapon1] = useState(getDefaultWeapon());
  const weaponRef = useRef<HTMLSpanElement>();
  useEffect(() => {
    const onIteration = () => {
      setWeapon1((old) => getRandomWeapon(old));
    };
    weaponRef.current?.addEventListener("animationiteration", onIteration);
    return () => {
      weaponRef.current?.removeEventListener("animationiteration", onIteration);
    };
  }, [weaponRef.current]);

  return (
    <>
      Localization for{" "}
      <span className="tagline__weapon-wrapper">
        <span className={clsx("tagline__weapon")} ref={weaponRef}>
          {weapon1}
        </span>
      </span>
    </>
  );
};
