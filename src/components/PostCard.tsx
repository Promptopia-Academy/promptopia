import { PostWithCategory } from "@/types/data-types";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Likes from "./ui/Likes";

type Props = {
  post: PostWithCategory;
};

function PostCard({ post }: Props) {
  console.log(post);
  return (
    <div className="w-[450px] h-[556px] flex flex-col gap-[17px]">
      {/* image container------------ */}
      <div className="w-full h-[275px] relative overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt="Post Image"
          fill
          placeholder="blur"
          blurDataURL={post.image}
          className=" absolute object-cover"
        />
      </div>
      {/* detail container------------ */}
      <div className="w-full h-[28.1rem] px-[2rem] flex flex-col gap-[15px]">
        {/* header of detail container------------ */}
        <div className="flex items-center justify-between ">
          <p className="text-[#2DAAFC] text-[15px] font-semibold">
            {post.category.slug}
          </p>
          <Likes />
        </div>
        {/* title & description of detail container------------ */}
        <div className="flex flex-col gap-[5px] ">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-base text-[#676565]">{post.description}</p>
        </div>
        {/* footer of detail container------------ */}
        <div className="flex items-center justify-between">
          <p className="text-[#676565] text-[15px] font-semibold">
            {format(new Date(post.created_at), "MMMM dd, yyyy")}
          </p>
          <Button text="Read More..." />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
