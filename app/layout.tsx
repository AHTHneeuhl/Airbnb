import { Nunito } from "next/font/google";
import "./globals.css";

import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import {
  LoginModal,
  RegisterModal,
  RentModal,
  SearchModal,
} from "./components/modals";
import Navbar from "./components/navbar/Navbar";
import ToastProvider from "./providers/ToastProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
