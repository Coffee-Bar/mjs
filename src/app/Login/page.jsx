"use client";

import { faArrowLeft, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Page = () => {
  const [regPage, setRegPage] = useState(0);

  return (
    <div className="min-h-svh max-h-svh bg-color-primary">
      <NavbarWelcome />
      <Content regPage={regPage} setRegPage={setRegPage} />
    </div>
  );
};

export default Page;

const NavbarWelcome = () => {
  return (
    <Link href={"/"} className="absolute mt-10 cursor-pointer ms-20">
      <FontAwesomeIcon icon={faArrowLeft} className="w-8 h-8 text-color-dark" />
    </Link>
  );
};

const Content = ({ regPage, setRegPage }) => {
  const nextPage = (params) => {
    const newPage = params + 1;
    setRegPage(newPage);
  };
  return (
    <div
      className="bg-color-primary w-full min-h-svh  flex  justify-around items-center"
      data-theme="light"
    >
      <Image
        src={"/../../favicon.ico"}
        height={1000}
        width={1000}
        className="aspect-square h-96 w-96 max-xl:hidden flex-none rounded-xl object-cover"
      />
      <div className=" flex flex-col justify-center items-center ">
        <div className="text-center justify-center">
          <h1 className="text-5xl font-bold drop-shadow-2xl">Ayo Masuk!</h1>
          <p className="py-6 ">
            Segera lengkapi data data yang belum dimasukan, semakin cekatan semakin aman.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-color-primary">
          <form className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-color-dark font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-color-dark font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered  "
                required
              />
               <label className="label flex justify-between">
            <Link href="/Register" className="label-text-alt link link-hover">Forgot password?</Link>
            <Link href="/Register" className="label-text-alt link link-hover">Dont have account?</Link>
          </label>
            </div>
            <div className="form-control flex-row mt-2 gap-2">
              <button
                className="btn btn-color-dark flex-1"
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  width={1000}
                  height={1000}
                  className="w-4 h-4 mr-4 -mt-0.5"
                />
                SIGN UP
              </button>
              <Link href={"/homepageUser"} className="btn btn-color-dark flex-1">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

