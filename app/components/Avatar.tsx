"use client";

import Image from "next/image";

type TProps = {
  src: string | null | undefined;
};

const Avatar: React.FC<TProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={src || "/placeholder.jpg"}
    />
  );
};

export default Avatar;
