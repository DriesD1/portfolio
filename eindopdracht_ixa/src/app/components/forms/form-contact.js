export default function FormContact() {
  return (
    <>
      <form className="p-8 w-full form-contact rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 flex flex-col">
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              name="name"
              className="p-2 w-full bg-standard-transparent border text-standard-white border-solid border-standard-white focus:outline-none rounded-[10rem]"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <input
              placeholder="Your Email"
              type="email"
              id="email"
              name="email"
              className="p-2 bg-standard-transparent text-standard-white w-full border border-solid border-standard-white focus:outline-none rounded-[10rem]"
            />
          </div>
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            rows="4"
            className="mt-1 bg-standard-transparent p-2 w-full  border text-standard-white border-solid border-standard-white focus:outline-none rounded-md resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-standard-white font-semibold py-2 px-4 rounded hover:bg-standard-spotify focus:outline-none focus:shadow-outline-standard-spotify active:bg-standard-spotify"
        >
          Submit
        </button>
      </form>
    </>
  );
}
