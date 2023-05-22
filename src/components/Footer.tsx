'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { jost, notojp } from '@/app/fonts'
import style from './Footer.module.scss';

export default function Footer() {
  const [year, setYear] = useState<number>()
  useEffect(() => {
    const date = new Date().getFullYear();
    setYear(date)
  }, [])

  return (
    <article className="border-2 border-blue-500 bg-ar-regular">
      <section className={`max-w-5xl mt-16 mb-24 mx-auto border-4 border-pink-800 px-8 lg:px-0 ${style.faq}`}>
        <h2 className={`mb-8 sm:mb-6 text-white text-center text-3xl ${style.jost}`}>Let us help you</h2>
        <p className="text-base text-white text-center">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody</p>
        <div className="flex justify-center">
          <a href="" className="inline-block mt-16 mx-auto w-auto rounded-full bg-white text-ar-navy font-bold px-8 py-4">お問合せはこちら</a>
        </div>

        <a href="" className='block mt-16'>
          <Image
            src="/muralLogo.svg"
            width="120"
            height="36"
            alt="Mural Overcoming All Walls"
            className={`mx-auto`}
          />
        </a>
        <p className='text-white text-center mt-3 text-sm'>
          {year} @ Mural Inc.
        </p>

{/*

        <div className="flex flex-col md:flex-row justify-around my-12 gap-6 flex-wrap">
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
          </div>

          <div className={`p-6 flex flex-col flex-1 items-center text-left space-y-4 bg-ar-gray rounded-xl ${style.faqCard}`}>
            <dl>
              <dt className="text-lg font-semibold text-ar-regular mb-4">質問文テキスト質問文テキスト質問文テキスト質問文テキスト質問文テキスト</dt>
              <dd className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyBodyテキスト</dd>
            </dl>
          </div>


        </div> */}

      </section>
    </article>
  )
}
