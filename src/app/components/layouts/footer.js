import { Links } from "../contacts";
import Spotify from "../shared/spotify";
import Navigation from "./navigation";

export default function Footer () {
  return (
    <>
      <section className="mt-[10rem] w-full max-w-[50rem] mb-[4rem] mx-auto">
        <div className="flex flex-wrap justify-between">
            <div>
                <Spotify containerClass="flex items-center gap-[2rem] text-standard-beige lg:max-w-[30rem] w-full max-w-[80%] mx-auto h-[80px] bg-standard-spotify rounded-full mb-8" />
                <p className="text-standard-white text-normal lg:text-[1.3rem]">
                © 2024 Dries Dhondt - All Rights Reserved
                </p>
            </div>

            <div>
                <div>
                    <strong className="mb-[1rem] font-bold text-standard-white text-normal lg:text-[1.3rem]">Elsewhere:</strong>
                    <Links />
                </div>
            </div>
        </div>
      </section>
    </>
  )
};