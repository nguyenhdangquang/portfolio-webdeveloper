import React, { useRef } from "react";

import Header from "../components/Header";
import HighlightCard from "../components/HighlightCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

import { useIsomorphicLayoutEffect } from "../utils";
import data from "../data/portfolio.json";
import Button from "../components/Button";

export default function Home() {
  const projectRef = useRef();
  const highlightRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHighlightRef = () => {
    window.scrollTo({
      top: highlightRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => window.open("../images/NHDQ_Resume.pdf")} type={"primary"} disabled>
          Download Resume
        </Button>
      </div>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleProjectScroll={handleProjectScroll}
          handleHighlightRef={handleHighlightRef}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectRef}>
          <h1 className="text-2xl text-bold">Project</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={highlightRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Highlights.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.highlights.map((hl, index) => (
              <HighlightCard
                key={index}
                name={hl.title}
                description={hl.description}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
