import Image from "next/image";
import LandingpageImage from "../public/HeroImage.png";
import fullSolanaLogo from '../public/fullSolanaLogo.png'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="mt-2 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-8">
                  <h1 className="mt-4 text-5xl tracking-tight text-stone-100 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl font-Encode">
                    <span className="block">
                      Trade your cards on the Solana blockchain
                    </span>
                    <span className="mt-4 block text-3xl text-solanagreen">
                      And save a lot of money
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-stone-100 sm:mt-5 sm:text-lg lg:text-base xl:text-base font-Inter">
                    Bring your collection on the Solana blockchain and start
                    buying, selling and trading your cards. Use theCardsBox for
                    managing your collection. Connect with collectors all around
                    the world.
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
                            className="block w-full rounded-md border-2 border-gray-400 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            value="Join now !"
                            name="member[subscribe]"
                            className="block w-full rounded-md bg-gradient-to-r from-solanapurple to-solanablue hover:from-solanablue hover:to-solanagreen py-3 px-4 font-medium text-black shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            Join waitlist
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-stone-100 sm:mt-4 font-Inter">
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
                  </div>
                  <div className="mt-12 flex justify-self-end items-center text-lg font-Inter">
                    <div className="text-lg font-medium text-stone-100 font-Inter">
                      {" "}
                      Built on &nbsp;
                    </div>
                    <div>
                      <Image
                        src={fullSolanaLogo}
                        alt=""
                        height={25}
                        width={172}
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div className="mt-12 mb-16 sm:mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
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

export default Hero;
