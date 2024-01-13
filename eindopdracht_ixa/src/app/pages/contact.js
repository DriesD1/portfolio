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

export default function ContactPage() {
  const { loading, error, data } = useQuery(GET_CONTACT);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.contacts && data.contacts.length > 0 && (
        <section>
          <div className="text-standard-brokenWhite flex-col w-[80rem] flex text-center max-w-full w-[63rem] max-w-full w-[63rem] justify-center">
            <h1 className="sm:text-[58px] font-bold text-center lg:text-[108px] mr-[20rem]">
              LET'S WORK
            </h1>
            <h1 className=" sm:text-[58px] font-bold text-center lg:text-[108px] ml-[20rem]">
              TOGETHER
            </h1>
          </div>

          <div className="max-w-[70rem] ml-[1rem] mr-[1rem] flex items-center w-full mx-auto">
            <div>
              <div className="text-standard-beige">
                <p className="max-w-[30rem] text-[1.3rem] lg:text-[2rem] lg:mr-[3rem] mt-[5rem] rounded-t-[10rem] w-full object-cover object-top">
                  Have questions or feedback? I'm here to help! Feel free to
                  reach out to me.
                </p>
              </div>

              {data.contacts.map((contact, index) => (
                <div className=" text-standard-white" key={index}>
                  <div class="contact-container">
                    <div class="text-[1rem] lg:text-[1.3rem] mt-[3rem] flex gap-[1rem] items-center flex gap-1">
                      <p>EMAIL:</p>
                      <a
                        href="mailto:dries2003@outlook.be"
                        class="contact-link"
                      >
                        dries2003@outlook.be
                      </a>
                    </div>
                    <div class="text-[1rem] lg:text-[1.3rem] mb-[1rem] flex gap-[1rem] items-center flex gap-1 mt-1 mb-2">
                      <p>TEL:</p>
                      <a href="tel:0460977801" class="contact-link">
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
              ))}
            </div>

            <div className="min-h-screen flex items-center max-w-[40rem] justify-center">
  <form className="p-8 w-full rounded">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="mb-4 flex flex-col">
        <input
          placeholder="Your Name"
          type="text"
          id="name"
          name="name"
          className="p-2 w-full rounded-[10rem]"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          name="email"
          className="p-2 w-full rounded-[10rem]"
        />
      </div>
    </div>

    <div className="mb-6">
      <textarea
        placeholder="Your Message"
        id="message"
        name="message"
        rows="4"
        className="mt-1 p-2 w-full rounded-md resize-none"
      />
    </div>

    <button
      type="submit"
      className="bg-green-500 text-standard-white font-semibold py-2 px-4 rounded hover:bg-standard-spotify focus:outline-none focus:shadow-outline-standard-spotify active:bg-standard-spotify"
    >
      Submit
    </button>
  </form>
</div>



          </div>
        </section>
      )}
    </>
  );
}
