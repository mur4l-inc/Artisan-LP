"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./Pricing.module.scss";

export default function Pricing() {
  const [planList, setPlanList] = useState<string[]>([]);
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
        const LightPlanPriceValue = getValue(
          remoteConfig,
          "LightPlanPrice"
        ).asString();
        const MiddlePlanPriceValue = getValue(
          remoteConfig,
          "MiddlePlanPrice"
        ).asString();
        const EnterPrisePlanPriceValue = getValue(
          remoteConfig,
          "EnterPrisePlanPrice"
        ).asString();

        setPlanList([
          LightPlanPriceValue,
          MiddlePlanPriceValue,
          EnterPrisePlanPriceValue,
        ]);
      } catch (error) {
        console.error("Error fetching remote config:", error);
        setError(true);
      }
    };

    fetchRemoteConfig();
  }, []);

  return (
    <article className="bg-ar-gray pt-16 pb-24">
      <section
        id="price"
        className={`flex flex-col max-w-5xl mx-auto px-8 lg:px-0 ${style.pricing}`}
      >
        <h2 className="text-ar-purple mb-8 sm:mb-6">Price</h2>
        <h3 className="mb-6 md:mb-4 mt-4 md:mt-0 text-ar-regular text-2xl font-bold">
          ご利用料金
        </h3>
        <p className="text-ar-regular text-base">
          BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody
        </p>

        <div className="flex flex-col md:flex-row justify-around mt-12 gap-7">
          <div
            className={`py-6 flex flex-col flex-1 items-center text-center space-y-4 bg-white rounded-xl ${style.card}`}
          >
            <Image
              src="light-plan.svg"
              width="80"
              height="80"
              alt="ライトプラン"
              className={`mx-auto`}
            />
            <h3 className="text-lg font-semibold">Light Plan</h3>
            <p className="!mt-0">Dev</p>
            <p className="text-2xl text-ar-regular">
              {isError ? (
                <p className="text-sm text-gray-400 px-2">
                  <i>
                    読み込みに失敗しました。
                    <br />
                    後ほど再度読み込みをしてください。
                  </i>
                </p>
              ) : (
                planList[0] ?? (
                  <Image
                    src="loading.svg"
                    width="50"
                    height="50"
                    alt="loading"
                    className={`mx-auto`}
                  />
                )
              )}
            </p>
            <div className="w-full px-2">
              <hr className="w-full" />
            </div>
            <p className="text-sm text-left text-gray-600">
              BodyテキストBodyテキスト
            </p>
          </div>

          <div
            className={`py-6 flex flex-col flex-1 items-center text-center space-y-4 bg-white rounded-xl ${style.card}`}
          >
            <Image
              src="middle-plan.svg"
              width="80"
              height="80"
              alt="ミドルプラン"
              className={`mx-auto`}
            />
            <h3 className="text-lg font-semibold">Middle Plan</h3>
            <p className="!mt-0">＋3D ＋High level</p>
            <p className="text-2xl text-ar-regular">
              {isError ? (
                <p className="text-sm text-gray-400 px-2">
                  <i>
                    読み込みに失敗しました。
                    <br />
                    後ほど再度読み込みをしてください。
                  </i>
                </p>
              ) : (
                planList[1] ?? (
                  <Image
                    src="loading.svg"
                    width="50"
                    height="50"
                    alt="loading"
                    className={`mx-auto`}
                  />
                )
              )}
            </p>
            <div className="w-full px-2">
              <hr className="w-full" />
            </div>
            <p className="text-sm text-left text-gray-600">
              BodyテキストBodyテキスト
            </p>
          </div>

          <div
            className={`py-6 flex flex-col flex-1 items-center text-center space-y-4 bg-white rounded-xl ${style.card}`}
          >
            <Image
              src="enterprise-plan.svg"
              width="80"
              height="80"
              alt="エンタープライズプラン"
              className={`mx-auto`}
            />
            <h3 className="text-lg font-semibold">Enterprise Plan</h3>
            <p className="!mt-0">＋3D ＋High level +PR</p>
            <p className="text-2xl text-ar-regular">
              {isError ? (
                <p className="text-sm text-gray-400 px-2">
                  <i>
                    読み込みに失敗しました。
                    <br />
                    後ほど再度読み込みをしてください。
                  </i>
                </p>
              ) : (
                planList[2] ?? (
                  <Image
                    src="loading.svg"
                    width="50"
                    height="50"
                    alt="loading"
                    className={`mx-auto`}
                  />
                )
              )}
            </p>
            <div className="w-full px-2">
              <hr className="w-full" />
            </div>
            <p className="text-sm text-left text-gray-600">
              BodyテキストBodyテキスト
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
