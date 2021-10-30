import React from "react";

const About = () => {
  return (
    <div>
      <section class="relative py-16 bg-blueGray-50">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-4 mb-4">
                  <h4 class="text-xl font-bold text-white">Shift us</h4>
                  <p class="text-md font-light mt-2 text-white">
                    Shift us company currently providing the best delivery
                    service accross the world. We are the trustable and 100%
                    reliable.
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="w-full md:w-6/12 px-4">
              <div className="space-y-2 text-center">
                <h2 className="text-4xl font-bold">Our Creative Team</h2>
              </div>
              <div class="flex flex-wrap">
                <div class="w-full md:w-6/12 px-4">
                  <div class="relative flex flex-col mt-4">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i class="fas fa-sitemap"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Emma Watson</h6>
                      <p class="mb-4 text-indigo-500">CEO, Shiftus</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col min-w-0">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i class="fas fa-drafting-compass"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Harry Potter</h6>
                      <p class="mb-4 text-indigo-500">Marketing head</p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-6/12 px-4">
                  <div class="relative flex flex-col min-w-0 mt-4">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i class="fas fa-newspaper"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Ronald Wiesely</h6>
                      <p class="mb-4 text-indigo-500">
                        Delivery Regional officer
                      </p>
                    </div>
                  </div>
                  <div class="relative flex flex-col min-w-0">
                    <div class="px-4 py-5 flex-auto">
                      <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i class="fas fa-file-alt"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Severus Snape</h6>
                      <p class="mb-4 text-indigo-500">Advisor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
