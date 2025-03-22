import React from "react";

interface ButtonProps {
  buttonLabel: string;
  isSelected: boolean;  
  onClick: () => void;  
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`m-2 p-[2px] text-[10px] w-[80px] rounded-lg ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;

