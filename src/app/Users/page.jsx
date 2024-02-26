"use client";

import { faArrowLeft, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Navbar2 from "@/components/Navbar2";
import { useRouter } from "next/navigation";

const Page = () => {
  const [regPage, setRegPage] = useState(0);

  return (
    <div className="min-h-svh max-h-svh bg-color-primary">
      <Navbar2 />
      <Content regPage={regPage} setRegPage={setRegPage} />
    </div>
  );
};

export default Page;

const Content = ({ regPage, setRegPage }) => {
  // router
const router = useRouter()

  //state
  const [formData, setFormData] = useState({
    data1page1: "",
    data2page1: "",
    data3page1: "",
    data1page2: "",
    data2page2: "",
    data3page2: "",
    data1page3: "",
    data2page3: "",
    data3page3: "",
  })

  //ref
  const input1 = useRef()

  //func
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(dataPrev => ({
      ...dataPrev,
      [name]: value
    }))
  }

  const nextState = (param) => {
    const keyowrd1 = input1.current.value
    if(!keyowrd1) return
    const newState = param + 1;
    if(regPage === 0){
      if (formData.data1page1.trim() === '' || formData.data2page1.trim() === '' || formData.data3page1.trim() === '') return
    } else if (regPage === 1){
    if (formData.data1page2.trim() === '' || formData.data2page2.trim() === '' || formData.data3page2.trim() === '') return
    } else if(regPage === 2){
    if (formData.data1page2.trim() === '' || formData.data2page2.trim() === '' || formData.data3page2.trim() === '') return
    }
    setRegPage(newState);
  };

  const previousState = (param) => {
    const newState = param - 1;
    setRegPage(newState);
  };

  const handleSubmit = (event) => {


    const keyowrd1 = input1.current.value
    if(!keyowrd1) return
    event.preventDefault()
    if (formData.data1page1.trim() === '' || formData.data2page1.trim() === '' || formData.data3page1.trim() === '') return
    if (formData.data1page2.trim() === '' || formData.data2page2.trim() === '' || formData.data3page2.trim() === '') return
    if (formData.data1page3.trim() === '' || formData.data2page3.trim() === '' || formData.data3page3.trim() === '') return
    console.log(formData);
    alert("Berhasil")
    setTimeout(()=> {
      router.push("/")
    },3000)
  

  }
  return (
    <div
      className="bg-color-primary w-full min-h-90vh max-h-90vh flex justify-center xl:justify-around max-xl:items-center"
      data-theme="light"
    >
      <div className="min-h-90vh max-h-90vh flex justify-center items-center ">
        <Image
          src={"/../../favicon.ico"}
          height={1000}
          width={1000}
          className="aspect-square h-96 w-96 max-xl:hidden flex-none rounded-xl object-cover"
        />
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="text-center justify-center">
          <h1 className="text-2xl font-bold drop-shadow-2xl">
            Yuk Lengkapi Data!
          </h1>
          <p className="pb-6 pt-3 text-sm max-w-sm max-w-440">
            Segera lengkapi data sebelum tanggal akhir daftar tahap akhir, cek
            info secara berkala ya!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm max-w-440 shadow-2xl bg-color-primary">
          <form className="card-body" method="POST" onSubmit={handleSubmit}>
            {/* {INPUT STATE} */}
            {
              regPage === 0 ?
              (
                <>
              <label className="label flext justify-center">
                <span className="label-text text-lg -mb-4 text-center font-bold text-color-birulaut">
                  Data Calon Mahasiswa
                </span>
              </label>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data1page1}
                  name="data1page1"
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                  ref={input1}
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data2page1}
                  name="data2page1"
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                  ref={input1}
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data3page1}
                  name="data3page1"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
            </>
              )
              : null
            }
            {
              regPage === 1 ?
              (
                <>
              <label className="label flext justify-center">
                <span className="label-text text-lg -mb-4 text-center font-bold text-color-birulaut">
                  Data Orangtua Mahasiswa
                </span>
              </label>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data1page2}
                  name="data1page2"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data2page2}
                  name="data2page2"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data3page2}
                  name="data3page2"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
            </>
              )
              : null
            }
            {
              regPage === 2 ?
              (
                <>
              <label className="label flext justify-center">
                <span className="label-text text-lg -mb-4 text-center font-bold text-color-birulaut">
                  Data Alamat Mahasiswa
                </span>
              </label>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data1page3}
                  name="data1page3"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data2page3}
                  name="data2page3"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-color-dark font-semibold">
                    text
                  </span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.data3page3}
                  name="data3page3"
                ref={input1}
                  type="text"
                  placeholder="text"
                  className="input input-bordered  h-10"
                  required
                />
              </div>
            </>
              )
              : null
            }
            

            {/* {BTN STATE} */}
            {regPage === 0 ? (
              <div className="form-control flex-row mt-4 gap-2">
                <button
                  onClick={() => nextState(regPage)}
                  className="btn btn-primary bg-color-birulaut btn-md flex-1"
                >
                  Next
                </button>
              </div>
            ) : null}
            {regPage === 1 ? (
              <div className="form-control flex-row mt-4 gap-2">
                <button
                  onClick={() => previousState(regPage)}
                  className="btn btn-primary bg-color-birulaut btn-md flex-1"
                >
                  Previous
                </button>
                <button
                  onClick={() => nextState(regPage)}
                  className="btn btn-primary bg-color-birulaut btn-md flex-1"
                >
                  Next
                </button>
              </div>
            ) : null}
            {regPage === 2 ? (
              <div className="form-control flex-row mt-4 gap-2">
                <button
                  onClick={() => previousState(regPage)}
                  className="btn btn-primary bg-color-birulaut btn-md flex-1"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="btn btn-primary bg-color-birulaut btn-md flex-1"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};
