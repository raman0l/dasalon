"use client";
import React, { useState } from "react";
import Link from "next/link";
import Heading from "@/components/comman/Heading";
import { EyeIcon, LogoIcon, MailIcon } from "@/components/helper/Icon";
import Pragraph from "@/components/comman/Pragraph";
import Image from "next/image";

function Login(e) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="max-w-[1440px] bg-[#FFF] mx-auto flex w-full">
        <div className="flex flex-col gap-5 justify-between w-[50%] max-[900px]:w-full">
          <div>
            <Link
              href={"/"}
              className="flex gap-1 items-center lg:p-8 md:p-6 p-[18px]"
            >
              <LogoIcon />
              <Heading
                className={"font-semibold !leading-[120%] !tracking-[-0.56px]"}
                title={"daSalon"}
              />
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:gap-8 md:gap-7 gap-5 max-w-[360px] mx-auto"
          >
            <div className="flex flex-col lg:gap-3 gap-2">
              <Heading
                className={
                  "lg:!text-3xl font-semibold leading-[120%] !tracking-[-0.6px]"
                }
                title={"Login"}
              />
              <Pragraph
                className={"font-medium leading-[150%] tracking-[-0.32px]"}
                title={"Welcome back! Please enter your account"}
              />
            </div>
            <div>
              <div className="flex flex-col lg:gap-6 gap-5 ">
                <div className="flex flex-col lg:gap-5 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs md:text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="ex. dasalon@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-2 px-[10px] rounded-lg text-black outline-none border-[#E4E4E7] border-1 placeholder:text-sm placeholder:font-medium placeholder:leading-[142%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs md:text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                      Password
                    </label>
                    <div className="flex gap-3 justify-between py-2 px-[10px] rounded-lg text-black  border-[#E4E4E7] border-1 items-center">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full placeholder:text-sm outline-none placeholder:font-medium placeholder:leading-[142%]"
                      />

                      <EyeIcon />
                    </div>
                  </div>
                  <Link
                    href={"/forgotpassword"}
                    className="md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#B751FB]"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div>
                  <div className="flex flex-col lg:gap-4 md:gap-3 gap-2">
                    <button
                      type="submit"
                      className="text-[#FFF] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] py-2 px-4 rounded-[6px] border-[1.5px] border-[#B751FB] bg-[#B751FB] w-full hover:bg-white hover:text-[#B751FB] duration-400 ease-in-out cursor-pointer"
                    >
                      Login
                    </button>
                    <Link
                      href={"https://www.google.com/"}
                      target="blank"
                      className="w-full flex items-center justify-center gap-2 md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] py-2 px-4 rounded-[6px] border-1 border-[#E4E4E7] shadow-2xl cursor-pointer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                      Sign up with Google
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <Pragraph
                className={
                  "md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] !text-[#808188]"
                }
                title={"Not Have an account?"}
              />
              <Link
                href={"/"}
                className={
                  "md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#B751FB] cursor-pointer"
                }
              >
                Sign Up
              </Link>
            </div>
          </form>
          <div className="lg:p-8 md:p-6 p-[18px] flex justify-between gap-4">
            <Pragraph
              className={
                "md:!text-sm !text-xs font-medium leading-[142%] tracking-[-0.28px] text-nowrap"
              }
              title={"© daSalon 2024"}
            />
            <Link
              href={"mailto:help@dasalon.com"}
              className={
                "md:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] text-[#808188] flex gap-1 items-center"
              }
            >
              <MailIcon />
              help@dasalon.com
            </Link>
          </div>
        </div>
        <div className="w-[50%] max-[900px]:hidden">
          <div className="bg-[url('/assets/png/bg-blue.png')] bg-no-repeat bg-center bg-cover px-10 flex flex-col lg:gap-9 gap-6 xl:py-[82px_25px] lg:pt-15 lg:pb-5 pt-10 pb-4 h-full">
            <div className="flex flex-col lg:gap-3 gap-2">
              <Heading
                className="lg:!text-4xl md:!text-3xl !text-2xl font-semibold leading-[140%] tracking-[-0.72px] !text-[#FFF]"
                title={"Now monitoring all activities is very easy to do"}
              />
              <Pragraph
                className="lg:!text-xl md:!text-lg !text-base font-medium leading-[140%] tracking-[-0.4px]"
                title={
                  "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                }
              />
            </div>
            <div>
              <Image
                className="w-full h-auto"
                src={"/assets/png/Dashoard.png"}
                alt="Dashoard"
                width={559}
                height={572}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
