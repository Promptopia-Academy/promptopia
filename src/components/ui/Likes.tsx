import Image from "next/image";

function Likes() {
  return (
    <div className="flex gap-1.5 items-center justify-center">
      <Image
        src={"/like.png"}
        alt="like"
        width={15}
        height={15}
        className="w-[15px] h-[15px]"
      />
      <p className="text-[#676565] text-[10px]">50k</p>
      <Image
        src={"/dislike.png"}
        alt="dislike"
        width={15}
        height={15}
        className="w-[15px] h-[15px]"
      />
      <p className="text-[#676565] text-[10px]">700</p>
    </div>
  );
}

export default Likes;
