"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

type TProps = {
  currentUser?: SafeUser | null;
  listingId: string;
};

const HeartButton: React.FC<TProps> = ({ listingId, currentUser }) => {
  const hasFavorited = false;
  const toggleFavorite = () => {
    // TODO: Implement
  };

  return (
    <div className="relative hover:opacity-80 transition cursor-pointer">
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={`${hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}`}
      />
    </div>
  );
};

export default HeartButton;
