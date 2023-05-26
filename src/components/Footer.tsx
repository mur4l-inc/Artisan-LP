// "use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { jost, notojp } from "@/app/fonts";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <article className="py-24 bg-ar-navy">
      <section
        id="inquiry"
        className={`max-w-5xl mx-auto px-8 lg:px-0 ${style.faq}`}
      >
        <h2
          className={`mb-8 sm:mb-6 text-white text-center text-3xl ${style.jost}`}
        >
          Let us help you
        </h2>
        <p className="text-base text-white text-center">
          BodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBodyテキストBody
        </p>
        <div className="flex justify-center">
          <a
            href=""
            className="inline-block mt-16 mx-auto w-auto rounded-full bg-white text-ar-navy font-bold px-8 py-4"
          >
            お問合せはこちら
          </a>
        </div>

        <a href="" className="block mt-16">
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
