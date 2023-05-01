"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

type TProps = {
  currentUser?: SafeUser | null;
};

const UserMenu: React.FC<TProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((value) => !value), []);
  const { onOpen: openRegisterModal } = useRegisterModal();
  const { onOpen: openLoginModal } = useLoginModal();
  const { onOpen: openRentModal } = useRentModal();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return openLoginModal();
    }

    openRentModal();
  }, [openLoginModal, currentUser, openRentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Airbnb your home
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={openLoginModal} />
                <MenuItem label="My favorites" onClick={openLoginModal} />
                <MenuItem label="My reservations" onClick={openLoginModal} />
                <MenuItem label="My properties" onClick={openLoginModal} />
                <MenuItem label="Airbnb my home" onClick={openRentModal} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={openLoginModal} />
                <MenuItem label="Register" onClick={openRegisterModal} />
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
