import React from "react";
import { Layout, Hero, CarBrands, Service, Testimonial } from "./../components";

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <CarBrands></CarBrands>
      {/* Services Section */}
      <div className="bg-black border-t border-accents-2">
        <div className="container mx-auto py-12">
          <div class="py-12">
            <div class="max-w-screen-xl mx-auto px-8">
              <div class="text-center">
                <p class="text-base leading-6 text-red-500 font-semibold tracking-wide uppercase">
                  Transactions
                </p>
                <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white">
                  A better way to send money
                </h3>
                <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>

              <div class="mt-10">
                <ul class="grid grid-cols-2 col-gap-8 row-gap-10">
                  <li>
                    <Service
                      icon={
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      }
                      title="Competitive exchange rates"
                      text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                    ></Service>
                  </li>
                  <li class="mt-0">
                    <Service
                      icon={
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      }
                      title="No hidden fees"
                      text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                    ></Service>
                  </li>
                  <li class="mt-0">
                    <Service
                      icon={
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      }
                      title="Transfers are instant"
                      text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                    ></Service>
                  </li>
                  <li class="mt-0">
                    <Service
                      icon={
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      }
                      title="Mobile notifications"
                      text="Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione."
                    ></Service>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="relative bg-black border-t border-accents-2">
        <div
          className="absolute bottom-0 left-0 w-64"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4c4c4c 1px, transparent 0)`,
            backgroundSize: `25px 25px`,
            height: `70%`,
          }}
        ></div>
        <div className="container mx-auto pt-12 pb-20">
          <div class="py-12">
            <div class="max-w-screen-xl mx-auto px-8">
              <Testimonial
                quote="Vinfy is the best experience I have had when buying a car. I got my new
        car in record time at an unbeatable price. They took care of everything."
                author={{
                  name: "Bernard Lane",
                  position: "Head of Ocado Technology, Barcelona",
                  photo:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                }}
              ></Testimonial>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
