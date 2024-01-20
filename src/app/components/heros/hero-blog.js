import { gql, useQuery } from "@apollo/client";

const GET_BLOGS = gql`
query Blog {
    blogs {
      id
      slug
      title
      blogPhoto {
        url
      }
    }
  }
  
`;

export default function HeroBlog() {
  const { loading, error: errorHome, data: dataBlog } = useQuery(GET_BLOGS);

  return (
    <>
      {loading && <p>Loading...</p>}
      {dataBlog && dataBlog.homes && dataBlog.homes.length > 0 && (
        <section className="max-w-[80rem] mx-auto">
          {dataBlog.homes.map((blog) => (
            <div className="flex flex-col p-[2rem] mb-[2rem]" key={blog.id}>
              <h1 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[108px] max-w-full w-[63rem] mx-auto">
                {blog.title}
              </h1>
              <p className="text-standard-beige sm:text-[16px] mt-[2rem] font-bold text-center lg:text-[20px] max-w-full w-[63rem] mx-auto">
                {blog.description}
              </p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
