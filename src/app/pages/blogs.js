import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

export default function BlogsPage() {
  const GET_BLOGS = gql`
    query MyQuery {
      blogs {
        id
        slug
        title
        blogPhoto {
          url
        }
        createdAt
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BLOGS);
  return (
    <>
      <h1 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[108px] max-w-full w-[63rem] mx-auto">
        blogs
      </h1>
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-center text-red-500 font-semibold">
          Error: {error.message}
        </p>
      )}
      <div className="flex justify-around mt-[3rem]">
        {data &&
          data.blogs &&
          data.blogs.length > 0 &&
          data.blogs.map((blog) => (
            <div className="max-w-xs bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <span className="text-[4rem] text-standard-white">&ldquo;</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-standard-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-standard-brokenWhite">
                  {new Date(blog.createdAt).toLocaleString()}
                </p>
                <Link
                  to={`${ROUTES.BLOGS}/${blog.slug}`}
                  className="text-sm text-standard-white hover:underline mt-2"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
