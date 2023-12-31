"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./QA.module.scss";
import { FaqItem } from "./FaqItem";

interface faq {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function QA() {
  const [faqList, setFaqList] = useState<faq[]>([]);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRemoteConfig = async (): Promise<void> => {
      if (typeof window === "undefined") {
        return;
      }

      try {
        const { remoteConfig } = await import("../utils/firebaseClient");
        const { fetchAndActivate, getValue } = await import(
          "firebase/remote-config"
        );

        // Set the minimum fetch interval to a desired value (in seconds)
        remoteConfig.settings = {
          minimumFetchIntervalMillis: 3600, // 1 hour
          fetchTimeoutMillis: 3600,
        };

        // Fetch the Remote Config values
        await fetchAndActivate(remoteConfig);

        // Get the Remote Config parameter value
        const Question_1 = getValue(remoteConfig, "Question_1").asString();
        const Answer_1 = getValue(remoteConfig, "Answer_1").asString();
        const Question_2 = getValue(remoteConfig, "Question_2").asString();
        const Answer_2 = getValue(remoteConfig, "Answer_2").asString();
        const Question_3 = getValue(remoteConfig, "Question_3").asString();
        const Answer_3 = getValue(remoteConfig, "Answer_3").asString();
        const Question_4 = getValue(remoteConfig, "Question_4").asString();
        const Answer_4 = getValue(remoteConfig, "Answer_4").asString();
        const Question_5 = getValue(remoteConfig, "Question_5").asString();
        const Answer_5 = getValue(remoteConfig, "Answer_5").asString();
        const Question_6 = getValue(remoteConfig, "Question_6").asString();
        const Answer_6 = getValue(remoteConfig, "Answer_6").asString();
        const Question_7 = getValue(remoteConfig, "Question_7").asString();
        const Answer_7 = getValue(remoteConfig, "Answer_7").asString();
        const Question_8 = getValue(remoteConfig, "Question_8").asString();
        const Answer_8 = getValue(remoteConfig, "Answer_8").asString();
        const Question_9 = getValue(remoteConfig, "Question_9").asString();
        const Answer_9 = getValue(remoteConfig, "Answer_9").asString();
        const Question_10 = getValue(remoteConfig, "Question_10").asString();
        const Answer_10 = getValue(remoteConfig, "Answer_10").asString();

        setFaqList([
          {
            question: Question_1,
            answer: Answer_1,
            isOpen: false,
          },
          {
            question: Question_2,
            answer: Answer_2,
            isOpen: false,
          },
          {
            question: Question_3,
            answer: Answer_3,
            isOpen: false,
          },
          {
            question: Question_4,
            answer: Answer_4,
            isOpen: false,
          },
          {
            question: Question_5,
            answer: Answer_5,
            isOpen: false,
          },
          {
            question: Question_6,
            answer: Answer_6,
            isOpen: false,
          },
          {
            question: Question_7,
            answer: Answer_7,
            isOpen: false,
          },
          {
            question: Question_8,
            answer: Answer_8,
            isOpen: false,
          },
          {
            question: Question_9,
            answer: Answer_9,
            isOpen: false,
          },
          {
            question: Question_10,
            answer: Answer_10,
            isOpen: false,
          },
        ]);
      } catch (error) {
        console.error("Error fetching remote config:", error);
        setError(true);
      }
    };

    fetchRemoteConfig();
  }, []);

  return (
    <article className="bg-white">
      <section
        id="faq"
        className={`flex flex-col max-w-5xl mt-16 mb-24 mx-auto lg:px-0 ${style.faq}  w-[calc(100%-64px)] lg:w-[calc(100%-128px)]`}
      >
        <h2 className="text-ar-purple mb-8 sm:mb-6 font-semibold">FAQ</h2>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-ar-regular text-2xl font-bold">
          よくある質問
        </h3>
        <p className="text-ar-regular text-base">
          Instagram AR上で出来ることであれば、なんでも対応可能です。
          「何ができるかわからない…」 の段階でもお気軽にご相談ください。
          <br />
          ワンストップで課題解決に取り組む会社ですので、各フェーズでの取り組みについてお客様と並走しながら解決いたします。
        </p>

        <div className="flex flex-col md:flex-row justify-start mt-12 gap-6 flex-wrap">
          {isError ? (
            <p className="text-sm text-gray-400 px-2">
              <i>
                読み込みに失敗しました。
                <br />
                後ほど再度読み込みをしてください。
              </i>
            </p>
          ) : faqList.length > 0 ? (
            faqList.map((faq: faq, index) => (
              <FaqItem
                key={faq.question + index}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <Image
              src="loading.svg"
              width="50"
              height="50"
              alt="loading"
              className={`mx-auto`}
            />
          )}
        </div>
      </section>
    </article>
  );
}
