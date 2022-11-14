import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import Navbar from "./navbar";
import LandingpageImage from '../public/avatarArthurSoir.jpg'
import SolanaLogo from '../public/SolanaLogo.png'

const Landingpage = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <Navbar />
      </div>

      <main>
        <div className="bg-white pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                    <span className="block">Trade your cards on Solana</span>
                    <span className="block text-indigo-400">
                      and save tons of money
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Bring your collection on the Solana blockchain and start
                    trading and selling your cards for free*. Use theCardsBox
                    for managing your collection. Connect with collectors all
                    around the world.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form
                      action="https://www.getrevue.co/profile/thecardsbox/add_subscriber"
                      method="post"
                      id="revue-form"
                      name="revue-form"
                      target="_blank"
                      className="sm:mx-auto sm:max-w-xl lg:mx-0"
                    >
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <input
                            placeholder="Enter your email"
                            type="email"
                            name="member[email]"
                            className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            value="Join now !"
                            name="member[subscribe]"
                            className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-black shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Join waitlist
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        By subscribing, you agree with Revue’s{" "}
                        <a target="_blank" href="https://www.getrevue.co/terms">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          target="_blank"
                          href="https://www.getrevue.co/privacy"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                    <div className="flex mt-6">
                        <span>Built on</span>
                        <Image src={SolanaLogo} alt="" height={100} width={200}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={LandingpageImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
};

export default Landingpage;
