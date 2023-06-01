import React, { FC, useEffect, useState } from "react";
import style from "./QA.module.scss";

type Props = {
  question: string;
  answer: string;
};

export const FaqItem: FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // replace 768px with your desired breakpoint
    setIsSmallScreen(mediaQuery.matches);
    const handler = (e: any) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleClick = () => {
    if (isSmallScreen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`p-6 flex flex-col flex-1 items-start text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}
    >
      <dl className="">
        <dt
          className={`text-lg font-semibold text-ar-regular mb-4 md:cursor-auto cursor-pointer pr-8 md:pr-0 ${
            style.faqItem
          } ${!isOpen && isSmallScreen ? "!mb-0" : style.isOpen}
          `}
          onClick={handleClick}
        >
          {question}
        </dt>
        {(isOpen || !isSmallScreen) && (
          <dd className="text-ar-regular text-base">{answer}</dd>
        )}
      </dl>
    </div>
  );
};
