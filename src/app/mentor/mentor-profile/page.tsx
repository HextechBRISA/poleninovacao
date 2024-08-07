"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mentor from "../../../../public/Mentor.png";
import { FaRegHeart, FaHeart, FaArrowLeft } from "react-icons/fa";
import MentorCalendar from "../components/MentorCalendar";

export default function MentorProfilePage() {
  const [isFavorited, setIsFavorited] = useState(false);

  function toggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  return (
    <>
      <div className="w-3/5 lg:w-4/6 sm:w-5/6 mt-[120px] mx-auto flex justify-between items-center xs:h-44">
        <div className="w-auto h-full flex items-center sm:flex-col sm:items-start">
          <Image
            src={Mentor}
            alt="Mentor Image"
            className="w-20 h-20 rounded-full object-cover mr-4 shadow-md"
          />
          <div className="w-full flex flex-col">
            <h1 className="text-[20px] text-shadow-md  font-semibold font-sans mb-3 sm:mt-3">
              João Oliveira
            </h1>
            <div className=" text-sm h-auto flex flex-col items-start">
              <h2 className="font-bold mr-2">Área:</h2>
              <h2>Modelo de negócios</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full">
          {isFavorited ? (
            <FaHeart
              className="text-[25px] xs:text-[22px] text-shadow-md text-red-500 cursor-pointer mb-4"
              onClick={toggleFavorite}
            />
          ) : (
            <FaRegHeart
              className="text-[25px] xs:text-[22px] text-shadow-md  cursor-pointer mb-4"
              onClick={toggleFavorite}
            />
          )}
          <Link href={"/resident"}>
            <FaArrowLeft className="text-[25px] xs:text-[22px] text-shadow-md  hover:animate-wobble" />
          </Link>
        </div>
      </div>
      <div className="bg-[#eadcd3] bg-opacity-50 mt-[30px] xs:mt-3 mx-auto rounded-[20px] p-10 xs:p-6 shadow-lg flex flex-col items-center justify-center w-3/5 lg:w-4/6 sm:w-5/6 mb-[50px]">
        <MentorCalendar isMentor={false} />
      </div>
    </>
  );
}
