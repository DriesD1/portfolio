import { gql, useQuery } from "@apollo/client";

// graphql query
const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      slug
      skills {
        id
        title
      }
      projectPhoto {
        url
      }
    }
  }
`;

const GET_HOME = gql`
query GetHome {
    homes{
      title
      info
      id
    }
  }
`;

export default function HomePage() {
    const { loading, error, data } = useQuery(GET_PROJECTS);
    const { loading: loadingHome, error: errorHome, data: dataHome } = useQuery(GET_HOME);
    return (
        <>
        {loading && <p>Loading...</p>}
        {dataHome && dataHome.homes && dataHome.homes.length > 0 && (
            <section>
                {dataHome.homes.map(home => (
                        <div className="flex flex-col p-[2rem] mb-[2rem]" key={home.id}>
                            <h1 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[108px] max-w-full w-[63rem] mx-auto">{home.title}</h1>
                            <p className="text-standard-beige sm:text-[16px] mt-[2rem] font-bold text-center lg:text-[20px] max-w-full w-[63rem] mx-auto">{home.info}</p>
                        </div>
                ))}
            </section>
        )}
        </>
    );
}