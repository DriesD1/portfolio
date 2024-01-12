import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Title } from "../components/shared";
import { ExperienceCard } from "../components/experiences";

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



const GET_SONGS = gql`
  query MyQuery {
    songs {
      artist
      songTitle
      slug
    }
  }
`;

const GET_SKILLS = gql`
  query MyQuery {
    skills {
      percentage: percentage
      title
    }
  }
`;

const URL_API_FORECAST =
  "https://api.weatherapi.com/v1/forecast.json?key=2e2178263a8b4e3ebb2142406221512&q=ghent&days=7";

export default function AboutPage() {
  const { loading, error, data } = useQuery(GET_ABOUTS);
  const { error: errorSongs, data: dataSongs } = useQuery(GET_SONGS);
  const { error: errorSkills, data: dataSkills } = useQuery(GET_SKILLS);

  const [weatherForecast, setWeatherForecast] = React.useState(null);

  useEffect(() => {
    fetch(URL_API_FORECAST)
      .then((response) => response.json())
      .then((weatherData) => setWeatherForecast(weatherData));
  }, []);

  const sortedSkills =
    dataSkills && dataSkills.skills
      ? dataSkills.skills
          .slice()
          .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
      : [];

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
                <iframe
                  className="lg:max-w-[20rem] w-full max-w-[80%] mx-auto h-[80px] bg-standard-spotify rounded-none"
                  src="https://open.spotify.com/embed/playlist/6Hnf9VRjPgxZaE51WqQzBb?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
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

      <section className="max-w-[70rem] mx-auto m-[3rem]">
        <Title title="Skills" />
        {sortedSkills.map((skill) => (
          <div
            className={`bg-standard-spotify flex items-center rounded-[10rem] h-[5rem] w-[${skill.percentage}] mt-[2rem]`}
            key={skill.title}
          >
            <div className="flex gap-[2rem] ml-[3rem] text-standard-white">
              <p>{skill.title}</p>
              <p>{skill.percentage}</p>
            </div>
          </div>
        ))}
      </section>
      
      <section>
        <ExperienceCard />
      </section>

    </>
  );
}
