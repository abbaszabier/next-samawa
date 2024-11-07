"use client";

import React from "react";
import Logo from "@/assets/images/logo-samawa.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const pathName = usePathname();

  const mainMenus = [
    {
      key: "homepage",
      label: "Home",
      slug: "/",
    },
    {
      key: "category",
      label: "Category",
      slug: "/categories",
    },
    {
      key: "packages",
      label: "Packages",
      slug: "/packages",
    },
    {
      key: "testimonials",
      label: "Testimonials",
      slug: "/testimonials",
    },
  ];
  return (
    <header className="flex justify-between container mx-auto items-center pt-8 -mb-8">
      <span className="flex gap-x-3 items-center">
        <span className="text-color2">
          <Logo />
        </span>
        <span className="text-2xl font-bold cursor-default">Samawa</span>
      </span>
      <ul className="flex gap-x-10">
        {mainMenus.map((menu) => (
          <Link
            key={menu.key}
            href={menu.slug}
            className={`hover:underline ${
              pathName === menu.slug ? "text-color2 font-bold" : ""
            }`}
          >
            {menu.label}
          </Link>
        ))}
      </ul>
      <ul className="flex gap-x-4">
        <Link
          href="/contacts"
          className="border border-dark1 px-5 py-3 rounded-full font-semibold"
        >
          Contact Us
        </Link>
        <Link
          href="/bookings"
          className="border transparent bg-color2 text-light1 px-5 py-3 rounded-full font-semibold"
        >
          My Booking
        </Link>
      </ul>
    </header>
  );
}

export default Header;
