import React from "react";
import { Box } from "@chakra-ui/react";
export default function Footer() {
  return (
    <>
      <Box className="bg-white pb-10 pt-4 sm:py-10 lg:py-12 sm:h-[800px] lg:h-[550px] border-[3px]">
        <Box className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Box className="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:pt-12 h-[459px] bg-gray-200">
            <Box className="col-span-full lg:col-span-1 lg:row-span-2">
              <Box className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    className="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  Flowrift
                </a>
              </Box>

              <p className="text-sm text-gray-500">
                © 2021 - Present Flowrift. All rights reserved.
              </p>
            </Box>

            <Box>
              <Box className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Products
              </Box>

              <nav className="flex flex-col gap-4">
                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Overview
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Solutions
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Pricing
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Customers
                  </a>
                </Box>
              </nav>
            </Box>

            <Box>
              <Box className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Company
              </Box>

              <nav className="flex flex-col gap-4">
                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    About
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Investor Relations
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Jobs
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Press
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </Box>
              </nav>
            </Box>

            <Box>
              <Box className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Support
              </Box>

              <nav className="flex flex-col gap-4">
                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Documentation
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Chat
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    FAQ
                  </a>
                </Box>
              </nav>
            </Box>
            <Box>
              <Box className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Legal
              </Box>

              <nav className="flex flex-col gap-4">
                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Terms of Service
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </Box>

                <Box>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cookie settings
                  </a>
                </Box>
              </nav>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
