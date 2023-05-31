import React from "react";
import Image from "next/image";
import { notojp } from "@/app/fonts";
import style from "./Hero.module.scss";

export default function Hero() {
  return (
    <article className="bg-black bg-first-sp md:bg-first-pc bg-cover bg-right-top">
      <section className="flex flex-col max-w-5xl mx-auto w-[calc(100%-64px)] lg:w-[calc(100%-128px)]">
        <div
          className={`flex flex-1 flex-col md:flex-row md:mt-28 mt-16 !px-8 ${style.container}`}
        >
          <div className="flex-1 flex-grow-0 flex-shrink basis-80">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.svg"
                width="120"
                height="120"
                className="mb-8 mx-auto sm:order-0"
                alt="logo"
              />
              <p
                className={`${notojp.variable} text-heroTag font-bold text-white text-center mb-8 mt-8 order-3`}
              >
                InstagramのAR制作
                <br />
                ならARTISAN
              </p>
              <div className="flex-1 md:hidden">
                <div className="ios-frame">
                  <div className="ios-frame-inner">
                    <video
                      className="video-in-frame"
                      width="220"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="./movie_1.webm" type="video/webm" />
                      <source src="./movie_1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <p className="text-white mb-9 order-4">
                BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキスト
              </p>
              <a
                href="#inquiry"
                className="rounded-full bg-white text-ar-navy font-bold px-8 py-4 order-5 hover:bg-ar-lightblue"
              >
                {/* transition-all ease-in-out duration-300 */}
                お問合せはこちら
              </a>
            </div>
          </div>

          <div className="flex-1 justify-center hidden md:flex">
            <div className="ios-frame">
              <div className="ios-frame-inner">
                <video
                  className="video-in-frame"
                  width="220"
                  autoPlay
                  muted
                  loop
                >
                  <source src="./movie_1.webm" type="video/webm" />
                  <source src="./movie_1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className={`flex flex-1 mb-0 md:mb-16 ${style.about}`}>
          <div className="flex w-full">
            <div className="flex-1 hidden md:block bg-about-pc lg:bg-contain bg-cover bg-center bg-no-repeat"></div>
            <div className="flex-1">
              <div
                // className={`flex flex-col !pb-24 md:!pb-14 ${style.aboutContainer}`}
                className={`flex flex-col ${style.aboutContainer}`}
              >
                <h2 className="text-ar-purple font-semibold mb-8 md:mb-4">
                  About
                </h2>

                <div className="-mx-8 md:mx-0">
                  <Image
                    src="/about_sp.webp"
                    width="416"
                    height="360"
                    alt="Artisanとは"
                    className="block md:hidden mx-auto mt-0 md:mt-12 mb-8 sm:mt-0 w-full"
                  />
                </div>
                <div className="flex mb-6">
                  <p className={`${style.aboutTitle}`}>
                    <ruby data-ruby="アルチザン">
                      ARTISAN<rt></rt>
                    </ruby>
                    とは
                  </p>
                  <div className={`${style.aboutTitleImage}`}>
                    <Image
                      src="/logoStamp.svg"
                      width="72"
                      height="72"
                      alt="logo"
                    />
                  </div>
                </div>

                <p className="text-ar-regular">
                  BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
