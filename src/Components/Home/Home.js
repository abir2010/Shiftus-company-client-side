import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import bannerImg from "../../images/banner_images/undraw_deliveries_131a.png";
import featureImg from "../../images/homepage_images/cmt-single001.jpg";
import SingleService from "../SingleService/SingleService";
import img1 from "../../images/homepage_images/cmt-post-002-1-720x520.jpg";
import img2 from "../../images/homepage_images/cmt-post-003-692x510.png";
import img3 from "../../images/homepage_images/cmt-blog04-692x454.jpg";
import "./Home.css";

const Home = () => {
  const { services, load } = useServices();
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
      {/* feature-part */}
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="space-y-6 text-center mb-4">
            <p className="text-indigo-500 font-bold text-md dark:text-coolGray-400">
              Satisfied Users Over The Globe
            </p>
            <h2 className="text-4xl font-bold">
              Safe, Reliable And Express Logistic Fully Transport Solutions.
            </h2>
          </div>
        <div className="container flex flex-col-reverse justify-center mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:pl-48 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-coolGray-900">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                Quality Control System
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                100% Satisfaction Guarantee
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                Highly Professional Staff
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                Accurate Testing Processes
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                Professional and Qualified
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                Highly Professional and Qualified
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-coolGray-800">
            <div className="flex items-center justify-center p-4 md:p-8">
              <img
                src={featureImg}
                alt=""
                className="rounded-lg shadow-lg dark:bg-coolGray-500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Service-part */}
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
                <h2 className="text-4xl font-bold">
                  Best Global Logistics Solutions.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <SingleService
                    key={service._id}
                    service={service}
                  ></SingleService>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {/* latest news-part */}
      <section>
        <div>
          <div className="space-y-2 text-center">
            <p className="text-indigo-500 font-bold text-md dark:text-coolGray-400">
              Explore Recent Works
            </p>
            <h2 className="text-4xl font-bold">Read Our Latest News</h2>
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
          <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-coolGray-800 dark:text-coolGray-100">
              <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-60 sm:h-96 dark:bg-coolGray-500"
                />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-coolGray-900">
                  <div className="space-y-2 bg-gray-700 text-white p-2">
                    <a
                      href="/"
                      className="inline-block text-2xl font-semibold sm:text-3xl"
                    >
                      Importers Achieves Saving Through Logistic First Sale
                      Rule.
                    </a>
                    <p className="text-xs dark:text-coolGray-400">
                      By
                      <a href="/" className="text-xs hover:underline">
                        Leroy Jenkins
                      </a>
                    </p>
                  </div>
                  <div className="dark:text-coolGray-100">
                    <p>
                      There are full service copany is to provide solution fv
                      repairing manage the entire service center for car
                      service....
                    </p>
                    <span className="text-indigo-700 cursor-pointer hover:underline">
                      Read more ...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <section className="p-4 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
              <div className="container mx-auto space-y-12">
                {/* single news-part */}
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                  <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
                    <img
                      src={img2}
                      alt=""
                      className="p-2 h-52 dark:bg-coolGray-500"
                    />
                  </div>
                  <div className="flex flex-col justify-start flex-1 px-6 py-12 dark:bg-coolGray-900">
                    <span className="text-xs uppercase dark:text-coolGray-400">
                      April 06,2021
                    </span>
                    <h2 className="text-3xl font-bold">
                      Carrier Schedule Reliability Stay Updated and Track
                    </h2>
                    <span className="text-indigo-700 cursor-pointer hover:underline">
                      Click to read ...
                    </span>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                  <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
                    <img
                      src={img3}
                      alt=""
                      className="p-2 h-60 dark:bg-coolGray-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
                    <span className="text-xs uppercase dark:text-coolGray-400">
                      June 21,2021
                    </span>
                    <h2 className="text-3xl font-bold">
                      Delivering the best global logistics services
                    </h2>
                    <p className="my-6 dark:text-coolGray-400">
                      CEO of shiftus company says yesterday that their company
                      currently providing the best delivery service accross the
                      world. They are the trustable and 100% reliable.
                    </p>
                    <span className="text-indigo-700 cursor-pointer hover:underline">
                      Read more ...
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
