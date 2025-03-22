import React from "react";

interface ButtonProps {
  buttonLabel: string;
  total: number
  image: string;
  percentage: number
}

const Card: React.FC<ButtonProps> = ({ buttonLabel, total, image, percentage }) => {
  return (
    <div className="w-[350px] h-[130px] bg-white m-2 ml-4 p-2 border border-gray-200 shadow-md  rounded-lg">

      <div className="flex justify-between">
        <p className="font-medium">{buttonLabel}</p>
        <img src={image} alt="" className="mr-4 w-[20px] h-auto object-contain" />
      </div>
      <div className="flex justify-around mt-4 font-medium">
        <p className="text-3xl text-b">{total}</p>



        <p className="text-[#02D63D] border rounded-2xl w-[83px] h-[28px] m-2 text-center flex justify-center items-center text-[15px]">{percentage.toFixed(2)} %</p>

      </div>
    </div>
  );
};

export default Card;