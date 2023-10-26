"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import DataBaseTable from "@/app/database/data-table";
import { columns } from "@/app/database/columns";
import { data } from "@/lib/data";
import { ThemeToggle } from "./themetoggle";
import { format } from "date-fns";
import { Dice1 } from "lucide-react";

const SignInButton = () => {
  const { data: session, status } = useSession();

  const currentDate = new Date();
  const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm:ss");

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    return (
      <div className="container ml-auto">
        <p className="text-sm flex-row text-neutral-700">
          Signed as {session.user.name} at {formattedDate}
        </p>
        <div className="flex float-right py-3">
          <Image
            src={session.user.image as string}
            height={60}
            width={60}
            className="rounded-full h-10 w-10 border:blue-700 float-right border: bg-neutral-600 border-5 mr-4"
            alt=""
          />
          <p className="text-neutral-600 text-sm mr-4 font-bold ">
            Welcome
            <p className="text-neutral-400 flex-row font-bold">
              {session.user.name}
            </p>
          </p>
          <Button
            className="text-white bg-blue-600 hover:bg-blue-700"
            onClick={() => signOut()}
          >
            <FcGoogle className="mr-2 flex text-2xl" />
            Sign Out
          </Button>
        </div>
        <DataBaseTable columns={columns} data={data} />
      </div>
    );
  } 
  
  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
        </div>
        <div className="md:hidden">
          <Image
            src="/examples/authentication-light.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="block dark:hidden"
          />
          <Image
            src="/examples/authentication-dark.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="hidden dark:block"
          />
        </div>
        <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              TSH
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;TikTok, this digital realm where seconds morph into
                  universes, evokes a profound meditation on the transience of
                  time, inviting us to ponder the essence of existence itself in
                  fleeting glimpses of creativity&rdquo;
                </p>
                <footer className="text-sm">TSH</footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-3xl py-3 font-semibold tracking-tight">
                  Get Started Now
                </h1>
                <Button
                  className="text-white py-5 bg-blue-600 shadow-md hover:bg-blue-700"
                  onClick={() => signIn()}
                >
                  <FcGoogle className="mr-2 flex max-w-fit text-3xl" />
                  Click to Log in
                </Button>
              </div>

              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center"></div>
      </div>
    );
  }

  // if (session && session.user) {
  //   return (

  //   );
  // }
};

export default SignInButton;

// useEffect(() => {
//   if (session) {
//     console.log(`User logged in at: ${new Date().toLocaleTimeString()}`);
//   } else {
//     console.log(`User logged out at: ${new Date().toLocaleTimeString()}`);
//   }
// }, [session]);
