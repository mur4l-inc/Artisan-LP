import React from "react";
import Image from "next/image";
import { notojp } from "@/app/fonts";
import style from "./Capability.module.scss";

export default function Capability() {
  return (
    <article className="pt-16 pb-24 bg-second-sp md:bg-second-pc bg-cover bg-right-top">
      <section
        id="capabilities"
        className={`flex flex-col max-w-5xl mx-auto lg:px-0 ${style.capability} w-[calc(100%-64px)] lg:w-[calc(100%-128px)]`}
      >
        <h2 className="text-ar-purple mb-8 sm:mb-6 font-semibold">
          What you can do
        </h2>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-white text-2xl font-bold">
          ARでこんなことが可能です
        </h3>
        <p className="text-white text-base">
          認識と表現を組み合わせたフィルターで、体験を作ることができます。
        </p>

        <div
          className={`flex mt-12 ${style.capabilityItem} flex-col lg:flex-row`}
        >
          <div className="flex flex-col md:flex-row md:justify-start justify-center">
            <div className={`ml-0 shrink-0 flex justify-center`}>
              <Image
                src="/capa_1.webp"
                width="160"
                height="160"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-2 mx-4 text-white text-xl font-bold text-center md:text-left">
                フェイスフィルター
              </p>
              <p className="my-3 mx-4 text-white text-sm text-center md:text-left">
                顔認識を行い、顔にペタっとARを表示したり3Dを表示する。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-start justify-center">
            <div className={`md:ml-8 lg:ml-12 shrink-0 flex justify-center`}>
              <Image
                src="/capa_2.webp"
                width="160"
                height="160"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-2 mx-4 text-white text-xl font-bold text-center md:text-left">
                画像認識フィルター
              </p>
              <p className="my-3 mx-4 text-white text-sm text-center md:text-left">
                画像を認識し、その場所をきっかけにARで2Dや3D、アニメーションを表示する。
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex mt-4 ${style.capabilityItem} flex-col lg:flex-row`}
        >
          <div className="flex flex-col md:flex-row md:justify-start justify-center">
            <div
              className={`md:ml-30 lg:ml-14 pl-1 shrink-0 flex justify-center`}
            >
              <Image
                src="/capa_3.webp"
                width="160"
                height="160"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-2 mx-4 text-white text-xl font-bold text-center md:text-left">
                平面認識フィルター
              </p>
              <p className="my-3 mx-4 text-white text-sm text-center md:text-left">
                地面や平面を認識する、大掛かりなARエフェクト。
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-start justify-center">
            <div className={`md:ml-10 lg:ml-14 shrink-0 flex justify-center`}>
              <Image
                src="/capa_4.webp"
                width="160"
                height="160"
                alt="Artisanとは"
                className={`${style.capabilityImage}`}
              />
            </div>
            <div className={`${style.capabilityItemText}`}>
              <p className="my-2 mx-4 text-white text-xl font-bold text-center md:text-left">
                ARゲーム
              </p>
              <p className="my-3 mx-4 text-white text-sm text-center md:text-left">
                ARのなかにミニゲームを組み込むことで、体験を創れるフィルター。
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
