import React from 'react'
import Image from 'next/image'
import { notojp } from '@/app/fonts'
import style from './Marketing.module.scss';

export default function Marketing() {
  return (
    <article className="border-2 border-blue-500 bg-white">
      <section className={`flex flex-col max-w-5xl mt-16 mb-24 mx-auto border-4 border-pink-800 px-8 lg:px-0 ${style.marketing}`}>
        <h2 className="text-ar-purple mb-8 sm:mb-6">Marketing & PR</h2>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-ar-regular text-2xl font-bold">マーケティング効果</h3>
        <p className="text-ar-regular text-base">BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody</p>

        <div className="flex flex-col md:flex-row justify-around my-12 gap-7">
          <div className="flex flex-col flex-1 items-center text-center space-y-4">
            <Image
              src="/engagement.svg"
              width="59"
              height="53"
              alt="Artisanとは"
              className={`${style.capabilityImage}`}
            />
            <h3 className="text-lg font-semibold">エンゲージメント</h3>
            <p className="text-sm text-left text-gray-600">
            ARフィルターが魅力的なデザインと独創的なエフェクトで、ユーザーの心を魅了します。 エンゲージメントの向上により、ブランドとユーザーが一体化します。
            </p>
          </div>

          <div className="flex flex-col flex-1 items-center text-center space-y-4">
            <Image
              src="/sns.svg"
              width="59"
              height="53"
              alt="Artisanとは"
              className={`${style.capabilityImage}`}
            />
            <h3 className="text-lg font-semibold">SNSコミュニケーション創出</h3>
            <p className="text-sm text-left text-gray-600">
            ARエフェクトの印象的な魅力は、ユーザーが喜んでシェアすることを促します。シェアがシェアを呼び連鎖的なバズにつながることも。 SNSの注目度が高まり、新たな顧客層の獲得やリーチ拡大が見込めます。
            </p>
          </div>

          <div className="flex flex-col flex-1 items-center text-center space-y-4">
            <Image
              src="/brand.svg"
              width="59"
              height="53"
              alt="Artisanとは"
              className={`${style.capabilityImage}`}
            />
            <h3 className="text-lg font-semibold">ブランド認知</h3>
            <p className="text-sm text-left text-gray-600">
            身近なコミュニケーションであるARフィルターを通じてブランドが認知されます。 シェアや口コミが増えることで、ブランドの露出が向上します。
            </p>
          </div>
        </div>

      </section>

      <hr className="max-w-5xl mx-auto" />

      <section className={`flex flex-col max-w-5xl mt-16 mb-24 mx-auto border-4 border-pink-800 px-8 lg:px-0 ${style.marketing}`}>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-ar-regular text-2xl font-bold">ARとPRで魅力を最大限に引き出す</h3>
        <p className="text-ar-regular text-base">私たちのInstagram ARソリューションは、最先端の技術と独自のPR戦略でお客様のブランドの価値を向上させることを目的としています。</p>

        <div className="flex flex-col md:flex-row justify-around my-12 gap-10">
          <div className={`flex flex-col flex-1 items-center text-left bg-ar-campaign ${style.marketingItem}`}>
            <Image
              src="/ar_pr1.png"
              width="272"
              height="181"
              alt="キャンペーン"
              className={`w-full h-auto block`}
            />
            <div className="bg-ar-campaign p-5 mt-0">
              <h3 className="text-lg font-semibold text-white mb-3">キャンペーン</h3>
              <p className="text-sm text-left text-white leading-normal">
              制作したARフィルターを活用してユーザー参加型のキャンペーン実施。<br/>企画から制作、事務局運用までワンストップでご対応します。
              </p>
            </div>
          </div>

          <div className={`flex flex-col flex-1 items-center text-left bg-ar-campaign ${style.marketingItem}`}>
            <Image
              src="/ar_pr2.png"
              width="272"
              height="181"
              alt="インフルエンサー"
              className={`w-full h-auto block`}
            />
            <div className="bg-ar-campaign p-5 mt-0">
              <h3 className="text-lg font-semibold text-white mb-3">インフルエンサー</h3>
              <p className="text-sm text-left text-white leading-normal">
              より多くの方にARフィルターを使っていただくため、ブランドにあった インフルエンサーを選定し、インフルエンサーを通してフィルターを拡散します。
              </p>
            </div>
          </div>

          <div className={`flex flex-col flex-1 items-center text-left bg-ar-campaign ${style.marketingItem}`}>
            <Image
              src="/ar_pr3.png"
              width="272"
              height="181"
              alt="オフライン"
              className={`w-full h-auto block`}
            />
            <div className="bg-ar-campaign p-5 mt-0">
              <h3 className="text-lg font-semibold text-white mb-3">オフライン</h3>
              <p className="text-sm text-left text-white leading-normal">
              オンラインだけでなく、店頭やイベント会場など、オフラインの場でARをご活用いただけるツールを企画・提供致します。<br/>例: 卓上のPOPやイベント時のエフェクトQRつきのパネルなど。
              </p>
            </div>
          </div>
        </div>

        <p className="text-ar-regular text-base">
          AR側ではフェイスフィルターや画像認識フィルター、平面認識フィルター、3D空間フィルター、ARゲームなど、多彩なARフィルターを提供し、ユーザーの体験をより魅力的に演出。
          <br/><br/>
          PR側では、Instagram投稿キャンペーンの企画・制作・運用、インフルエンサーやモデルの起用、ポスティングや 店頭POP制作、デジタルアド運用、大学生アンケートを含む幅広いサービスで、お客様のブランドを最大限にアピール。
          <br/><br/>
          もちろん、開発のみ/PRのみ/企画も といった発注も可能です。 お客様のブランドを認知・価値向上させるため、技術とPRの力を結集し、Instagram ARで目を引くソリューションを提供します。 価値ある体験をユーザーと共有し、SNS上での話題性を高めることで、お客様のブランドが飛躍的に成長するきっかけを創りだし、Instagram ARの可能性を引き出すパートナーを目指します。
        </p>

      </section>
    </article>
  )
}
