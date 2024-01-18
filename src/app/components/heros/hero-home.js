import { gql, useQuery } from "@apollo/client";

const GET_HOME = gql`
  query GetHome {
    homes {
      title
      info
      id
    }
  }
`;

export default function HeroHome() {
  const { loading, error: errorHome, data: dataHome } = useQuery(GET_HOME);

  return (
    <>
      {loading && <p>Loading...</p>}
      {dataHome && dataHome.homes && dataHome.homes.length > 0 && (
        <section className="max-w-[80rem] mx-auto">
          {dataHome.homes.map((home) => (
            <div className="flex flex-col p-[2rem] mb-[2rem]" key={home.id}>
              <h1 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[108px] max-w-full w-[63rem] mx-auto">
                {home.title}
              </h1>
              <p className="text-standard-beige sm:text-[16px] mt-[2rem] font-bold text-center lg:text-[20px] max-w-full w-[63rem] mx-auto">
                {home.info}
              </p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
