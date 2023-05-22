'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { notojp } from '@/app/fonts'
import style from './FAQ.module.scss';

interface faq {
  question: string;
  answer: string;
}

export default function Pricing() {
  const [faqList, setFaqList] = useState<faq[]>([])

    useEffect(() => {
      const fetchRemoteConfig = async (): Promise<void> => {
        if (typeof window === 'undefined') {
          return;
        }

        try {
          const { remoteConfig } = await import('../utils/firebaseClient');
          const { fetchAndActivate, getValue } = await import('firebase/remote-config');

          // Set the minimum fetch interval to a desired value (in seconds)
          remoteConfig.settings = {
            minimumFetchIntervalMillis: 3600, // 1 hour
            fetchTimeoutMillis: 3600
          };

          // Fetch the Remote Config values
          await fetchAndActivate(remoteConfig);

          // Get the Remote Config parameter value
          const Question_1 = getValue(remoteConfig, "Question_1").asString();
          const Answer_1 = getValue(remoteConfig, "Answer_1").asString();
          const Question_2 = getValue(remoteConfig, "Question_2").asString();
          const Answer_2 = getValue(remoteConfig, "Answer_2").asString();const EnterPrisePlanPriceValue = getValue(remoteConfig, "Question_2").asString();
          const Question_3 = getValue(remoteConfig, "Question_3").asString();
          const Answer_3 = getValue(remoteConfig, "Answer_3").asString();
          const Question_4 = getValue(remoteConfig, "Question_4").asString();
          const Answer_4 = getValue(remoteConfig, "Answer_4").asString();

          setFaqList([
            {
              question: Question_1,
              answer: Answer_1,
            },
            {
              question: Question_2,
              answer: Answer_2,
            },
            {
              question: Question_3,
              answer: Answer_3,
            },
            {
              question: Question_4,
              answer: Answer_4,
            }
          ])


          // Update the component state with the fetched value
          // setParameterValue(value);

          // setParameterImageValue(imageValue)

        } catch (error) {
          console.error("Error fetching remote config:", error);
        }
      };

      fetchRemoteConfig();

    }, []);

  return (
    <article className="border-2 border-blue-500 bg-white">
      <section className={`flex flex-col max-w-5xl mt-16 mb-24 mx-auto border-4 border-pink-800 px-8 lg:px-0 ${style.faq}`}>
        <h2 className="text-ar-purple mb-8 sm:mb-6">FAQ</h2>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-ar-regular text-2xl font-bold">よくある質問</h3>
        <p className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody</p>

        <div className="flex flex-col md:flex-row justify-around my-12 gap-6 flex-wrap">
          {
            faqList.length > 0
              ? faqList.map((faq: faq) => (
                <div key={faq.question} className={`p-6 flex flex-col flex-1 items-center text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}>
                  <dl>
                    <dt className="text-lg font-semibold text-ar-regular mb-4">{faq.question}</dt>
                    <dd className="text-ar-regular text-base">{faq.answer}</dd>
                  </dl>
                </div>
              ))
              : <Image
                src="loading.svg"
                width="50"
                height="50"
                alt="loading"
                className={`mx-auto`}
              />
          }

          {/* <div className={`p-6 flex flex-col flex-1 items-center text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}>
            <dl>
              <dt className="text-lg font-semibold text-ar-regular mb-4">質問文テキスト質問文テキスト質問文テキスト質問文テキスト質問文テキスト</dt>
              <dd className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキスト</dd>
            </dl>
          </div>

          <div className={`p-6 flex flex-col flex-1 items-center text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}>
            <dl>
              <dt className="text-lg font-semibold text-ar-regular mb-4">質問文テキスト質問文テキスト質問文テキスト質問文テキスト質問文テキスト</dt>
              <dd className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキスト</dd>
            </dl>
          </div>

          <div className={`p-6 flex flex-col flex-1 items-center text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}>
            <dl>
              <dt className="text-lg font-semibold text-ar-regular mb-4">質問文テキスト質問文テキスト質問文テキスト質問文テキスト質問文テキスト</dt>
              <dd className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキスト</dd>
            </dl>
          </div>

          <div className={`p-6 flex flex-col flex-1 items-center text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}>
            <dl>
              <dt className="text-lg font-semibold text-ar-regular mb-4">質問文テキスト質問文テキスト質問文テキスト質問文テキスト質問文テキスト</dt>
              <dd className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキスト</dd>
            </dl>
          </div> */}


        </div>

      </section>
    </article>
  )
}
