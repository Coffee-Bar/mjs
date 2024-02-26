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
    <Link
      href={"/"}
      className="absolute mt-10 cursor-pointer ms-20"
    >
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
          <h1 className="text-5xl font-bold drop-shadow-2xl">
            Daftar sekarang!
          </h1>
          <p className="pt-6 ">
            Daftarkan segera, Nikmati Fasilitas yang telah kami sediakan.
          </p>
          <div className="flex pb-6 justify-center ">
            <p>Jalur Pendaftaran</p>
            {/* <FontAwesomeIcon
              icon={faCircleInfo}
              style={{
                "--fa-primary-color": "#ffffff",
                "--fa-secondary-color": "#063465",
                "--fa-secondary-opacity": "1",
              }}
              height={1000}
              width={1000}f
              className="w-3.5 h-3.5 maticon cursor-pointer ms-1 relative z-10"
            /> */}
            <div className="dropdown dropdown-left dropdown-bottom  dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
              <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
              <div tabIndex={0} className="card-body">
                <h2 className="card-title text-base">6 Jalur Pendaftaran</h2> 
                <p>Here is a description!</p>
                <p>Here is a description!</p>
                <p>Here is a description!</p>
                <p>Here is a description!</p>
                <p>Here is a description!</p>
                <p>Here is a description!</p>
              </div>
            </div>
          </div>
            
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-color-primary">
          <form className="card-body">
            {
              regPage === 1 ? (
                <>
                <div className="form-control">
              <label className="label ">
                <span className="label-text text-color-dark font-semibold">
                  Nama Lengkap
                </span>
              </label>
              <input
                type="text"
                placeholder="nama"
                className="input input-bordered   "
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-color-dark font-semibold">
                  Nomor Seluler
                </span>
              </label>
              <input
                type="number"
                placeholder="nomor"
                className="input input-bordered  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-color-dark font-semibold">
                  Jalur Pendaftaran
                </span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  pilih jalur
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
                </>
              )
              : null
            }
            
            
            {regPage === 2 ? (
              <>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-color-dark font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                  disabled
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-color-dark font-semibold">
                      Ulangi Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered  "
                    required
                  />
                </div>
              </>
            ) : null}

            <div className="form-control mt-2">
              {
                regPage === 0
                ? (<button
                  onClick={() => nextPage(regPage)}
                  className="btn btn-color-dark"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    width={1000}
                    height={1000}
                    className="w-4 h-4 mr-4 -mt-0.5"
                  />
                  SIGN UP WITH GOOGLE
                </button>)
                : null
              }
              {
                regPage === 1
                ? <button
                onClick={() => nextPage(regPage)}
                className="btn btn-color-dark"
              >
                Next
              </button>
                : null
              }
              {
                regPage === 2
                ? (<Link
                  href={"/homepageUser"}
                  className="btn btn-color-dark"
                >
                  Daftar
                </Link>)
                : null
              }
              
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



