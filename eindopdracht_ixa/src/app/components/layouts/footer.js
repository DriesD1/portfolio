import { Links } from "../contacts";
import Navigation from "./navigation";

export default function Footer () {
  return (
    <>
      <section className="mt-[10rem] w-full max-w-[50rem] mb-[4rem] mx-auto">
        <div className="flex flex-wrap justify-between">
            <div>
                <iframe
                  className="lg:max-w-[30rem] mb-[2rem] w-full max-w-[80%] h-[80px]"
                  src="https://open.spotify.com/embed/playlist/6Hnf9VRjPgxZaE51WqQzBb?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
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