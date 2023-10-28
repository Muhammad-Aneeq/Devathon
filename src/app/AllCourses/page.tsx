import Image from "next/image";
import React from "react";
import { latestTechnologies } from "../../utils/coursesData";

const Card = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="relative w-full h-[200px]">
        <Image src={url} alt="card" fill />
      </div>
      <div className="p-6 leading-6">
        <div className="text-xl font-bold ">{title}</div>
        <div className="text-lg py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque
          porta.
        </div>
        <button className="bg-blue-600 py-4 text-white w-full mx-auto text-center  my-4">
          See More
        </button>
      </div>
    </div>
  );
};
const AllCourses = () => {
  return (
    <div className="py-36 flex flex-col justify-center items-center  container mx-auto">
      <div className="text-center">
        <p className="text-4xl font-bold">Our All Courses</p>
        <p className="text-lg w-1/2 mx-auto py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros
          ut dui bibendum ultricies. Maecenas egestas fringilla semper.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        {latestTechnologies.map((data, index: number) => (
          <Card url={data.imageUrl} title={data.title} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
