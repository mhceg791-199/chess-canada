"use client";

import { AuthContext } from "@/lib/context/auth";
import Link from "next/link";
import { useContext } from "react";

export default function NavAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("Authentication context is missing");
  }

  const { userData, logout } = authContext;

  const linkStyle =
    "block py-2 px-3 text-[#fffbfb] transition-all duration-200 hover:opacity-70";

  return (
    <>
      {userData ? (
        <Link
          href="/login"
          onClick={logout}
          className={linkStyle}
        >
          Sign Out
        </Link>
      ) : (
        <>
          <Link href="/" className={linkStyle}>
            Sign In
          </Link>

          {/* <Link href="/" className={linkStyle}>
            Create Account
          </Link> */}
        </>
      )}
    </>
  );
}
