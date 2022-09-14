import React, { useState } from "react";
import Nav from "../Components/nav";
import Image from "next/image";
import landingimg from "../Assets/pexels-pixabay-257923.jpeg";
import Link from "next/link";
import Footer from "../Components/footer";
import { useSession } from "next-auth/react";

export default function Home() {
  const data = useSession();

  return (
    <>
      <Nav />
      <div>
        <Image src={landingimg} alt="" />
        <div className="flex flex-col gap-4 justify-center items-center absolute top-[50%] right-[10%] -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="bg-black text-white text-3xl w-[16rem] p-6 text-center font-extrabold rounded-xl">
            Categories
          </h1>
          <Link href={"/products?category=Camera"}>
            <a className="bg-black/60 hover:scale-105 transition-all hover:bg-black/70 text-white text-3xl w-[12rem] p-3 py-6 text-center font-bold rounded-xl">
              Camera
            </a>
          </Link>

          <Link href={"/products?category=Laptop"}>
            <a className="bg-black/60 hover:scale-105 transition-all hover:bg-black/70 text-white text-3xl w-[12rem] p-3 py-6 text-center font-bold rounded-xl">
              Laptop
            </a>
          </Link>

          <Link href={"/products?category=Mobiles"}>
            <a className="bg-black/60 hover:scale-105 transition-all hover:bg-black/70 text-white text-3xl w-[12rem] p-3 py-6 text-center font-bold rounded-xl">
              Mobiles
            </a>
          </Link>
          <Link href={"/products?category=Baby-Accessories"}>
            <a className="bg-black/60 hover:scale-105 transition-all hover:bg-black/70 text-white text-3xl w-[12rem] p-3 py-6 text-center font-bold rounded-xl">
              Baby-Accessories
            </a>
          </Link>
          <Link href={"/products?category=Helmets"}>
            <a className="bg-black/60 hover:scale-105 transition-all hover:bg-black/70 text-white text-3xl w-[12rem] p-3 py-6 text-center font-bold rounded-xl">
              Helmets
            </a>
          </Link>
          <Link href={"/products?category=Tyres"}>
            <a className="bg-black/60 hover:scale-105 transition-all hover:bg-black/70 text-white text-3xl w-[12rem] p-3 py-6 text-center font-bold rounded-xl">
              Tyres
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
