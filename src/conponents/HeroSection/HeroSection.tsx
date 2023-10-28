import React from "react";

const CardData = [
  {
    title: "Actionable Training",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Interesting Quizzes",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Premium Material",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-[300px] flex flex-col justify-center items-center mt-[-50px] shadow-2xl bg-white p-10 text-center ">
      <div className="text-2xl font-bold  ">{title}</div>
      <div className="text-lg">{text}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className=" bg-[#0d68ae] py-72 pb-  flex flex-col justify-center items-center">
        <div className="text-white text-4xl text-center ">
          Learn from Industry Experts
        </div>
        <div className=" text-white text-2xl text-center py-12 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus
          tortor at diam gravida posuere. Curabitur et malesuada mi.
        </div>
      </div>
      <div className=" container flex flex-row flex-wrap justify-center mx-auto md:grid-cols-3 gap-10">
        {CardData.map((data, index: number) => (
          <Card key={index} title={data?.title} text={data?.text} />
        ))}
      </div>
    </>
  );
};

export default HeroSection;
