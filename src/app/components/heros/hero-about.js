import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Spotify } from "../shared";

// graphql query
const GET_ABOUTS = gql`
  query MyQuery {
    abouts {
      title
      description
      aboutImage {
        url
      }
      moreInfo {
        text
      }
    }
  }
`;

const URL_API_FORECAST =
  "https://api.weatherapi.com/v1/forecast.json?key=2e2178263a8b4e3ebb2142406221512&q=ghent&days=7";

export default function HeroAbout() {
  const { loading, error, data } = useQuery(GET_ABOUTS);


  const [weatherForecast, setWeatherForecast] = React.useState(null);

  useEffect(() => {
    fetch(URL_API_FORECAST)
      .then((response) => response.json())
      .then((weatherData) => setWeatherForecast(weatherData));
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data &&
        data.abouts &&
        data.abouts.length > 0 &&
        data.abouts.map((about) => (
          <section className="max-w-[80rem] mx-auto" key={about.title}>
            <h1 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[108px] max-w-full w-[63rem] mx-auto">
              {about.title}
            </h1>
            <div className="flex lg:justify-around items-center flex-wrap">
              <div className="w-full max-w-[80rem] lg:max-w-[20rem]">
                <img
                  className="lg:max-w-[20rem] w-full max-w-[80%] mx-auto h-[25rem] lg:mr-[3rem] lg:mt-[5rem] rounded-t-[10rem] w-full object-cover object-top"
                  src={about.aboutImage.url}
                  alt={about.title}
                />
                <Spotify  containerClass="flex items-center gap-[2rem] text-standard-beige lg:max-w-[20rem] w-full max-w-[80%] mx-auto h-[80px] bg-standard-spotify rounded-none" />
              </div>
              <div className="max-w-full w-[40rem]">
                <p className="text-standard-beige sm:text-[25px] mt-[2rem] font-bold lg:text-[50px] mx-auto">
                  {about.description}
                  <br />
                  {loading ? (
                    "Loading temperature..."
                  ) : (
                    <>
                      {weatherForecast && (
                        <span className="text-standard-beige sm:text-[25px] mt-[2rem] font-bold lg:text-[50px] mx-auto">
                          {weatherForecast.current.temp_c}°C Ghent, Belgium
                        </span>
                      )}
                    </>
                  )}
                </p>
                <p className="text-standard-brokenWhite lg:text-[20px] text-[16px]">
                  {about.moreInfo.text}
                </p>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}
