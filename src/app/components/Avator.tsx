"use client";
import Image from 'next/image';

export default function Avator({
  image,
  userName,
}: {
  image?: string;
  userName?: string;
}) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 relative overflow-hidden rounded-full">
        <Image
          src={image ?? ""}
          alt="avatar"
          fill
        />
      </div>
      <span className="text-sm ml-2">你好，{userName}</span>
    </div>
  )
}