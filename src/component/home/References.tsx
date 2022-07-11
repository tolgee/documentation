import React, {useState} from "react";

type Reference = {
  author: {
    name: string,
    position: string
    avatarUrl: string
  },
  quote: string
}

const references = [
  {
    author: {
      name: "John Doe 1",
      position: "Founder at Startup",
      avatarUrl: "john-cash.png"
    },
    quote: "Oh mama. Tolgee is the best tool I've ever tried. It saves my life. It's so fast and reliable. It makes me cry. Thanks a lot guys for this."
  },
  {
    author: {
      name: "John Doe 2",
      position: "Founder at Startup",
      avatarUrl: "john-cash.png"
    },
    quote: "Oh mama. Tolgee is the best tool I've ever tried. It saves my life. It's so fast and reliable. It makes me cry. Thanks a lot guys for this."
  },
  {
    author: {
      name: "John Doe 3",
      position: "Founder at Startup",
      avatarUrl: "john-cash.png"
    },
    quote: "Oh mama. Tolgee is the best tool I've ever tried. It saves my life. It's so fast and reliable. It makes me cry. Thanks a lot guys for this."
  },
  {
    author: {
      name: "John Doe 4",
      position: "Founder at Startup",
      avatarUrl: "john-cash.png"
    },
    quote: "Oh mama. Tolgee is the best tool I've ever tried. It saves my life. It's so fast and reliable. It makes me cry. Thanks a lot guys for this."
  }
] as Reference[]

export const References = () => {

  const [currentItemIndex, setCurrentItemIndex] = useState(0)

  const step = 100 / references.length
  const steps = references.reduce((acc, _) =>
    [...acc, (acc[acc.length - 1]) - step], [0])

  const left = steps[currentItemIndex];

  const onNext = () => {
    setCurrentItemIndex((current) => {
      return (current + 1) % (references.length)
    })
  }

  const onPrevious = () => {
    setCurrentItemIndex((current) => {
      return current > 1 ? current - 1 : references.length - 1;
    })
  }

  return (
    <section className="bg-[color:var(--references-bg)] flex flex items-center overflow-hidden relative items-center references-section">
      <button className="references__nav references__nav--left" aria-label="previous" onClick={onPrevious}/>
      <div className="py-20 md:mx-12 references flex flex-col flex-grow items-center relative z-10 overflow-hidden">
        <h2 className="mb-20 text-gradient text-3xl text-center relative z-30">Happy users all around the world.</h2>
        <div className="w-full">
          <div className="relative" style={{width: `${references.length * 100}%`}}>
            <div className={`relative flex transition-all duration-[2s]`}
                 style={{left: `${left}%`}}>
              {references.map((reference, idx) => (
                <div key={idx} className="flex justify-center" style={{width: `${100 / references.length}%`}}>
                  <div className="max-w-[800px]">
                    <div
                      className="grid grid-cols-5 gap-12 auto-rows-max">
                      <>
                        <div className="references__avatar-wrapper">
                          <div className="references__avatar">
                            <img className="rounded-[50%] z-20 relative" src={`/img/references-avatars/${reference.author.avatarUrl}`}/>
                          </div>
                        </div>

                        <div className="text-[20px] col-span-5 md:col-span-3 flex items-center text-center md:text-left z-30">{reference.quote}</div>
                        <div className="col-span-3 flex flex-col justify-center z-30">
                          <div className="text-[23px] md:text-[28px] text-primary">{reference.author.name}</div>
                          <div className="text-[16px] md:text-[20px] text-primary-light">{reference.author.position}</div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="references__nav references__nav--right" aria-label="next" onClick={onNext}/>
    </section>
  );
}
