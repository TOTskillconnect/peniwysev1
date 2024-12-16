import Image from "next/image";
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="bg-darkPurple relative text-white px-5 py-12 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Image
          src={"/hero-bg.png"}
          alt=""
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <Navbar />

        <div className="flex items-center flex-col md:flex-row justify-between gap-10 container mx-auto relative">
          <div className="basis-1/2 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3">
              Make every dollar count by{" "}
              <span className="text-lemon">understanding your cash flow</span>
            </h1>
            <p>
              Connect all your accounts in one place, track spending with
              precision, and let AI insights guide your journey.
            </p>

            <div className="flex items-center flex-wrap gap-[18px] mt-10">
              <Button
                text="Get Started"
                arrowType="dark"
                className="bg-lemon text-subdued border-lemon"
              />
              <Button
                text="Join Community"
                arrowType="light"
                className="bg-transparent border text-white border-white"
              />
            </div>
          </div>
          <div className="basis-1/2 relative w-full aspect-square">
            <Image
              src={"/hero-image.svg"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
