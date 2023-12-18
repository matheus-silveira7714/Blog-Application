import React from "react";
import Image from "next/image";
import Link from "next/link";
import about from "../../public/Me.jpg";

const SkillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "Express",
  "React",
  "Node",
  "Next.js",
  "Tailwind CSS",
  "React Native",
  "SEO",
  "Figma",
  "Web Design",
  "Firebase",
  "Framer motion",
];

const page = () => {
  return (
    <div className="mt-5 w-full h-full flex flex-col items-center justify-center textColor ">
      <div className="w-full flex flex-col md:flex-row min-h-[70vh] md:min-h-[65vh] justify-center items-center">
        <div className="w-full sm:w-1/2 h-full flex justify-center">
          <Image
            src={about}
            alt="Vijay"
            className="w-full h-full scale-90 pointer-events-none object-cover object-center rounded-full lg:w-4/5 lg:h-4/5 xl:h-2/3 xl:w-2/3 m-auto"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col text-left items-start justify-center textColor px-4">
          <h2 className="font-semibold capitalize text-3xl sm:text-4xl xl:text-6xl">
            Dream Big, Work Hard, Achieve More!
          </h2>
          <p className="font-noraml sm:font-medium mt-4 text-base sm:text-lg">
            This mantra drives my ork as a passionate freelancer. I blend
            innovative technology with timeless design for captivating digital
            experiences. Inspired by nature Aad literature, I'm a perpetual
            learner embracing challenges. With each project, I aim to leave a
            lasting impact - One pixel at a time.
          </p>
        </div>
      </div>
      {/* skills */}
      <div className="w-full flex flex-col px-4 mt-4">
        <h2 className="font-semibold text-3xl lg:text-4xl">Skills</h2>
        <ul className="flex flex-wrap mt-4 justify-start gap-2 sm:gap-3">
          {SkillList.map((item, index) => (
            <li
              className="font-semibold capitalize inline-block softBorder py-2 px-5 text-base lg:text-lg cursor-pointer rounded-full"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full mt-5 lg:mt-7 px-4 mx-auto text-center">
        <p className="font-medium text-lg">
          Have a project in mind? Reach out to me 📞 from &nbsp;<Link href="/contact" className="underline">here</Link> &nbsp;and let's make it happen.
        </p>
      </div>
    </div>
  );
};

export default page;
