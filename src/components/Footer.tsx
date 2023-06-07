"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./Footer.module.scss";

export default function Footer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <article className="py-24 bg-ar-navy">
      <section
        id="inquiry"
        className={`max-w-5xl mx-auto lg:px-0 ${style.contact} w-[calc(100%-64px)] lg:w-[calc(100%-128px)]`}
      >
        <h2
          className={`mb-8 sm:mb-6 text-white text-center text-3xl ${style.jost}`}
        >
          Let us help you
        </h2>
        <p className="text-base text-white text-center">
          お問い合わせは無料です。お気軽に問い合わせください。
          <br />
          *法人・個人ともにご相談を受け付けています。
        </p>
        <div className="flex justify-center md:mx-0 -mx-6">
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSc3uQL6mpKZmctjAfqypVeHLw4sZH9nzMMw1wf2bbfXLjpcOA/viewform?embedded=true"
            width="640"
            style={{ minHeight: "1155px" }}
            className="hidden sm:hidden md:block" // visible on md and up
          >
            読み込んでいます…
          </iframe>
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSc3uQL6mpKZmctjAfqypVeHLw4sZH9nzMMw1wf2bbfXLjpcOA/viewform?embedded=true"
            width="640"
            style={{ minHeight: "1265px" }}
            className="hidden sm:block md:hidden" // visible only on sm
          >
            読み込んでいます…
          </iframe>
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSc3uQL6mpKZmctjAfqypVeHLw4sZH9nzMMw1wf2bbfXLjpcOA/viewform?embedded=true"
            width="640"
            style={{ minHeight: "1405px" }}
            className="block sm:hidden" // visible only on xs
          >
            読み込んでいます…
          </iframe>
        </div>

        <a href="https://mur4l.com/" className="block mt-16">
          <Image
            src="/muralLogo.svg"
            width="120"
            height="36"
            alt="Mural Overcoming All Walls"
            className={`mx-auto`}
          />
        </a>
        <p className="text-white text-center mt-3 text-xs">
          {new Date().getFullYear()} @ Mural Inc.
        </p>
      </section>
    </article>
  );
}
