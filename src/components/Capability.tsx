import React from 'react'
import Image from 'next/image'
import { notojp } from '@/app/fonts'
import style from './Capability.module.scss';

export default function Capability() {
  return (
    <article className="border-2 border-blue-500 bg-purple-100">
      <section className={`flex flex-col max-w-5xl mt-16 mb-24 mx-auto border-4 border-pink-800 px-8 lg:px-0 ${style.capability}`}>
        <h2 className="text-ar-purple mb-8 sm:mb-6">What you can do</h2>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-white text-2xl font-bold">ARでこんなことが可能です</h3>
        <p className="text-white text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody</p>

        <div className={`flex mt-12 ${style.capabilityItem}`}>
          <div className="flex ">
            {/* <div className={`md:ml-12 lg:ml-16`}> */}
            <div className={`ml-0 lg:ml-16 shrink-0`}>
              <Image
                src="/square.png"
                width="104"
                height="104"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-3 mx-4 text-white text-base">BodyテキストBodyテキストBody テキストBody</p>
            </div>
          </div>

          <div className="flex ">
            <div className={`md:ml-8 lg:ml-12 shrink-0`}>
              <Image
                src="/square.png"
                width="104"
                height="104"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-3 mx-4 text-white text-base">BodyテキストBodyテキストBody テキストBody</p>
            </div>
          </div>
        </div>


        <div className={`flex mt-4 ${style.capabilityItem}`}>
          <div className="flex ">
            <div className={`md:ml-30 lg:ml-44 pl-1 shrink-0`}>
              <Image
                src="/square.png"
                width="104"
                height="104"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-3 mx-4 text-white text-base">BodyテキストBodyテキストBody テキストBody</p>
            </div>
          </div>

          <div className="flex ">
            <div className={`md:ml-10 lg:ml-14 shrink-0`}>
              <Image
                src="/square.png"
                width="104"
                height="104"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-3 mx-4 text-white text-base">BodyテキストBodyテキストBody テキストBody</p>
            </div>
          </div>
        </div>

      </section>
    </article>
  )
}
