import React from "react";

const Skillbar = React.forwardRef(({ skill }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-standard-spotify flex items-center rounded-[10rem] h-[5rem] mt-[2rem]`}
      key={skill.title}
      style={{
        width: `${skill.percentage}`,
      }}
    >
      <div className="flex gap-[2rem] ml-[3rem] text-standard-white">
        <p>{skill.title}</p>
        <p>{skill.percentage}</p>
      </div>
    </div>
  );
});

export default Skillbar;
