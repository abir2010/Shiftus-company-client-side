import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import bannerImg from "../../images/banner_images/undraw_deliveries_131a.png";
import SingleService from "../SingleService/SingleService";
import "./Home.css";

const Home = () => {
  const {services,load} = useServices();
  return (
    <div className="banner">
      {/* banner-part */}
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:gap-2">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannerImg}
              alt=""
              id="img"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              A Truly <span className="text-indigo-500">Moving </span>
              Experience
            </h1>
            <p className="mt-6 mb-8 text-gray-400 text-lg sm:mb-12">
              Managing logistics for world's
              <br className="hidden md:inline lg:hidden" /> multinational
              cpmpanies
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/contact"
                id="appointment-btn"
                className="px-8 py-3 text-lg bg-indigo-400 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
              >
                Contact Us !
              </Link>
              <Link
                to="/"
                id="service-btn"
                className="px-8 py-3 text-indigo-500 text-lg font-semibold border border-gray-400 rounded dark:border-coolGray-100"
              >
                Request A Call Back !
              </Link>
            </div>
          </div>
        </div>
      </section>
      {load ? (
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
      ) : (
        <div>
          <section className="py-6 sm:py-12 dark:bg-coolGray-800 dark:text-coolGray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="space-y-2 text-center">
                <p className="text-indigo-500 font-bold text-md dark:text-coolGray-400">
                Real Solutions, Real Fast!
                </p>
                <h2 className="text-4xl font-bold">Best Global Logistics Solutions.</h2>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {
                  services.map(service=><SingleService
                    key={service._id}
                    service={service}>
                  </SingleService>)
                }
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
