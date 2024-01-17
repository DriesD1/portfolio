import { gql, useQuery } from "@apollo/client";

const GET_CONTACT = gql`
  query MyQuery {
    contacts {
      email
      tel
      instagram {
        url
      }
      facebook {
        url
      }
      github {
        url
      }
      linkedin {
        url
      }
    }
  }
`;

export default function Links() {
  const { loading, error, data } = useQuery(GET_CONTACT);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.contacts && data.contacts.length > 0 && (
        data.contacts.map((contact, index) => (
          <div className="text-standard-white" key={index}>
            <div className="contact-container">
              <div className="text-[1rem] lg:text-[1.3rem] flex gap-[1rem] items-center flex gap-1">
                <p>EMAIL:</p>
                <a href="mailto:dries2003@outlook.be" className="contact-link">
                  dries2003@outlook.be
                </a>
              </div>
              <div className="text-[1rem] lg:text-[1.3rem] mb-[1rem] flex gap-[1rem] items-center flex gap-1 mt-1 mb-2">
                <p>TEL:</p>
                <a href="tel:0460977801" className="contact-link">
                  0460977801
                </a>
              </div>
            </div>
            {contact.instagram && (
              <div className="flex mb-[3rem] gap-[1rem]">
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 inline-block rounded-full border border-solid border-standard-white"
                >
                  <img
                    className="h-[2rem] w-[2rem] rounded-full"
                    src={contact.instagram.url}
                    alt="Instagram"
                  />
                </a>
                <a
                  href={contact.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 inline-block rounded-full border border-solid border-standard-white"
                >
                  <img
                    className="h-[2rem] w-[2rem] rounded-full"
                    src={contact.facebook.url}
                    alt="Facebook"
                  />
                </a>
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 inline-block rounded-full border border-solid border-standard-white"
                >
                  <img
                    className="h-[2rem] w-[2rem] rounded-full"
                    src={contact.linkedin.url}
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href={contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 inline-block rounded-full border border-solid border-standard-white"
                >
                  <img
                    className="h-[2rem] w-[2rem] rounded-full"
                    src={contact.github.url}
                    alt="GitHub"
                  />
                </a>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
}
