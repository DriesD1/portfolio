export default function ExperiencesInfo({ experience }) {
  return (
    <div
      className="rounded-[10rem] w-full w-[50%] mt-[2rem]"
      key={experience.title}
    >
      <div className="ml-[3rem] mb-[3rem] w-full md:w-[70%] text-standard-spotify">
        <p className="text-[3rem] opacity-50 mb-[2rem]">
          {experience.time}
        </p>
        <p className="opacity-100 font-semibold mb-[1rem] text-[2rem]">
          {experience.title}
        </p>
        <p className="opacity-100">{experience.about.text}</p>
      </div>
    </div>
  );
}
