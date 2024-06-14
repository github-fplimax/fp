"use client";

import { Building, Crane, HardHat, Truck } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="overflow-x-hidden pb-2 flex flex-col items-center justify-items-center justify-center">
      <div className="text-center relative">
        <div className="absolute inset-0 z-0 h-[400px] w-full flex items-center justify-center">
          <Image src="/GOPR1013.png" alt="" layout="fill" objectFit="cover" />
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl capitalize font-bold">
              About Us
            </h1>
          </div>
        </div>
        <article className=" mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 text-justify pt-[420px] sm:pt-[320px] lg:pt-[450px]">
          PT. Farrasindo Perkasa was founded and built to answer the challenges
          and demands of big cities in Indonesia which have limited land to
          build and provide office facilities and infrastructure, as well as
          trade on the one hand, as well as housing for residents on the other.
        </article>
      </div>
      <h1 className="flex items-center justify-center capitalize text-center text-2xl sm:text-3xl mb-4 text-orange-500">
        WHY YOU SHOULD CHOOSE US
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 pt-6 text-justify justify-items-center">
        <div data-aos="fade-right" className="w-full">
          <span className="flex flex-row gap-2 m-0">
            <HardHat size={32} />
            <p>experts</p>
          </span>
          <p>
            Supported by professional resources & advanced technology,
            Farrasindo Group will continue to contribute to the people of the
            nation and state to become a superior and trusted company.
          </p>
        </div>
        <div data-aos="fade-left" className="w-full">
          <span className="flex flex-row gap-2 m-0">
            <Crane size={32} />
            <p>technology</p>
          </span>
          <p>
            Farrasindo Group operates in the construction industry which
            prioritizes technology that keeps up with the times towards
            Indonesia with advanced development.
          </p>
        </div>
        <div data-aos="fade-right" className="w-full">
          <span className="flex flex-row gap-2 m-0">
            <Truck size={32} />
            <p>Concrete Machinery Expert</p>
          </span>
          <p>
            Having a Concrete Machinery Fleet of more than 200 units of all
            types and sizes, we are ready to contribute to developing Indonesia
          </p>
        </div>
        <div data-aos="fade-left" className="w-full">
          <span className="flex flex-row gap-2 m-0">
            <Building size={32} />
            <p>Portofolio</p>
          </span>
          <p>
            With experience building and working on strategic and retail
            projects, we are ready to help your project.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 pt-10"
      >
        <h1
          data-aos="fade-up"
          className="capitalize text-center text-2xl sm:text-3xl mb-4 text-orange-500"
        >
          Overview of PT. Farrasindo Perkasa
        </h1>
        <article className="text-justify">
          <span className="font-bold">PT Farrasindo Perkasa</span> was founded and built to answer the challenges
          and demands of large cities in Indonesia which have limited land to
          build and provide office facilities and infrastructure, as well as
          trade on the one hand, and housing for residents on the other. The
          implementation of regional autonomy for PT Farrasindo Perkasa is seen
          as a window and door to see big cities in the world with the common
          characteristics of increasingly high skyscrapers, modern shopping
          centers & the construction of houses based on Readymix Concrete or
          ready-made concrete.
        </article>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-8 mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-44 pt-6 text-justify">
          <div data-aos="fade-right" className="w-full sm:w-1/2">
            <h1 className="text-xl sm:text-2xl font-bold capitalize">vision</h1>
            <p>
              Become an influential & leading Concrete Pump Equipment Rental
              Service Company and supply of spare parts in Southeast Asia.
            </p>
          </div>
          <div data-aos="fade-left" className="w-full sm:w-1/2">
            <h1 className="text-xl sm:text-2xl font-bold capitalize text-start sm:text-end">
              mision
            </h1>
            <p>
              Develop, disseminate Concrete Pump Equipment Rental Services and
              provide spare parts and assist customers in their use to achieve
              higher levels of quality and productivity in accordance with
              customer expectations.
            </p>
          </div>
        </div>
      </div>
      {/* form brosur */}
      {/* <BrochureForm /> */}
    </section>
  );
};

export default page;
