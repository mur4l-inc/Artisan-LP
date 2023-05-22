import React from 'react'
import Image from 'next/image'
import { notojp } from '@/app/fonts'
import style from './Hero.module.scss';

export default function Hero() {
  return (
    <article className="border-2 border-blue-500">
      <section className="flex flex-col max-w-5xl mx-auto border-4 border-pink-800 bg-pink-200">
        <div className={`flex flex-1 flex-col md:flex-row mb-2 mt-28 sm:mt-16 !px-8 ${style.container}` }>

          <div className="flex-1 flex-grow-0 flex-shrink basis-80">
            <div className="flex flex-col items-center">
              <Image
                src='/logo.svg'
                width="120"
                height="120"
                className='mb-8 mx-auto sm:order-0'
                alt="logo" />
              <p className={`${notojp.variable} text-heroTag font-bold text-white text-center mb-8 sm:order-3 sm:mt-6`}>
                InstagramのAR制作<br/>ならARTISAN
              </p>
              <div className="flex-1 md:hidden">
                <div className="ios-frame">
                  <div className="ios-frame-inner">
                    <video className="video-in-frame" width="220" autoPlay muted loop>
                      {/* <source src="./movie_1.webm" type="video/webm" /> */}
                    </video>
                  </div>
                </div>

              </div>

              <p className="text-white mb-9 sm:order-4">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキスト</p>
              <button className="rounded-full bg-white text-ar-navy font-bold px-8 py-4 sm:order-5">お問合せはこちら</button>
            </div>
          </div>

          <div className="flex-1 justify-center hidden md:flex">


            <div className="ios-frame">
              <div className="ios-frame-inner">
                <video className="video-in-frame" width="220" autoPlay muted loop>
                  {/* <source src="./movie_1.webm" type="video/webm" /> */}
                </video>
              </div>
            </div>

          </div>

        </div>
        <div className={`flex flex-1 mb-16 ${style.about}`}>
          <div className="flex w-full">
            <div className="flex-1 hidden md:block">
              <Image
                src="/about.png"
                width="416"
                height="360"
                alt="Artisanとは"
                className="hidden md:block object-cover h-full"
              />
            </div>
            <div className="flex-1">
              <div className={`flex flex-col !pb-24 md:!pb-14 ${style.aboutContainer}`}>
                <h2 className="text-ar-purple mb-8 md:mb-4">About</h2>

                <Image
                  src="/about.png"
                  width="416"
                  height="360"
                  alt="Artisanとは"
                  className="block md:hidden mx-auto mt-12 mb-8 sm:mt-0"
                />

                <div className="flex mb-6">
                  <p className={`${style.aboutTitle}`}><ruby data-ruby="アルチザン">ARTISAN<rt></rt></ruby>とは</p>
                  <div className={`${style.aboutTitleImage}`}>
                    <Image
                      src="/logoStamp.svg"
                      width="72"
                      height="72"
                      alt="logo"
                    />
                  </div>
                </div>

                <p className="text-ar-regular">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
