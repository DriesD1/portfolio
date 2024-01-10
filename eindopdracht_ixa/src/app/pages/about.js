import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

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

const GET_JOBS = gql`
  query MyQuery {
    experiences {
      school
      stage
      title
      time
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
  const { error: errorJobs, data: dataJobs } = useQuery(GET_JOBS);
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
          <section key={about.title}>
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
                {dataSongs &&
                  dataSongs.songs &&
                  dataSongs.songs.length > 0 &&
                  dataSongs.songs.map((song) => (
                    <a
                      className="flex gap-5 bg-standard-grey lg:max-w-[20rem] w-full max-w-[80%] mx-auto items-center  p-3"
                      target="_blank"
                      href={`https://open.spotify.com/${song.slug}`}
                      rel="noreferrer"
                    >
                      <div>
                        <svg
                          height="50px"
                          width="50px"
                          viewBox="0 0 48 48"
                          fill="#000000"
                        >
                          <g
                            id="Icons"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="Color-"
                              transform="translate(-200.000000, -460.000000)"
                              fill="#F8EBD5"
                            >
                              <path
                                d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460"
                                id="Spotify"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className=" text-standard-beige">
                        <div>{song.songTitle}</div>
                        <div className="opacity-[60%]">{song.artist}</div>
                      </div>
                    </a>
                  ))}
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

      <section className="m-[3rem]">
        <h2 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[60px] max-w-full w-[63rem] mx-auto">
          Skills
        </h2>
        {sortedSkills.map((skill) => (
          <div
            className={`bg-standard-grey flex items-center rounded-[10rem] h-[5rem] max-w-[${skill.percentage}] w-full mt-[2rem]`}
            key={skill.title}
          >
            <div className="flex gap-[2rem] ml-[3rem] text-standard-white">
              <p>{skill.title}</p>
              <p>{skill.percentage}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="m-[3rem]">
        {dataJobs &&
          dataJobs.experiences &&
          dataJobs.experiences.length > 0 &&
          dataJobs.experiences.some((experience) => experience.school) ? (
          <div>
            <h2 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[60px] max-w-full w-[63rem] mx-auto">
              School
            </h2>
            {dataJobs.experiences.map((experience) =>
              experience.school ? (
                <div
                  className={`bg-standard-grey flex items-center rounded-[10rem] h-[5rem] w-full mt-[2rem]`}
                  key={experience.title}
                >
                  <div className="flex gap-[2rem] ml-[3rem] text-standard-white">
                    <p>{experience.title}</p>
                    <p>{experience.time}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : null}




      {dataJobs &&
          dataJobs.experiences &&
          dataJobs.experiences.length > 0 &&
          dataJobs.experiences.some((experience) => experience.school) ? (
          <div>
            <h2 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[60px] max-w-full w-[63rem] mx-auto">
              Jobs
            </h2>
            {dataJobs.experiences.map((experience) =>
              !experience.school ? (
                <div
                  className={`bg-standard-grey flex items-center rounded-[10rem] h-[5rem] w-full mt-[2rem]`}
                  key={experience.title}
                >
                  <div className="flex gap-[2rem] ml-[3rem] text-standard-white">
                    <p>{experience.title}</p>
                    <p>{experience.time}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : null}
      </section>


    </>
  );
}
