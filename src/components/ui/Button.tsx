import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button className="w-[113px] h-[36px] bg-[#2DAAFC] rounded-4xl text-white font-thin text-[15px] flex items-center justify-center gap-[5px] hover:bg-[#2DAAFC]/80 transition-all duration-200 ease-in-out cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
