import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const GET_BLOG = gql`
  query GetBlog($slug: String = "") {
    blog(where: { slug: $slug }) {
      id
      slug
      title
      description
      blogPhoto {
        url
      }
    }
  }
`;

export default function BlogPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { slug: id },
  });

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Link
      to="/blogs"
      className="block absolute top-[8rem] left-2 text-standard-white bg-steelBlue-500 py-2 px-4 rounded-lg hover:bg-steelBlue-700 transition-all duration-300"
    >
      &larr; Back to Blogs
    </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        {loading && <p className="text-2xl text-center">Loading...</p>}
        {error && (
          <p className="text-2xl text-center text-red-500 font-semibold">
            Error: {error.message}
          </p>
        )}

        {data && data.blog && (
          <div>
            {/* Blog Title */}
            <h2 className="text-4xl text-standard-white font-bold mb-4">{data.blog.title}</h2>

            {/* Blog Description */}
            <p className="text-lg text-standard-white mb-8">{data.blog.description}</p>

            {/* Blog Photo */}
            {data.blog.blogPhoto && (
              <img
                src={data.blog.blogPhoto.url}
                alt={data.blog.title}
                className="w-full rounded-lg mb-4"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
