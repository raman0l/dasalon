"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LogoIcon, MailIcon, ShopingCartIcon, EyeIcon } from "../helper/Icon";
import Heading from "../comman/Heading";
import Pragraph from "../comman/Pragraph";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const [shake, setShake] = useState(false); // shake animation

  // Step 1: Submit Email
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }
    setError("");
    // TODO: API call to send OTP
    setStep(2);
  };
  // Step 1: Verify OTP
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Verify OTP// Verify OTP
  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      setError("Please enter all 4 digits");
      return;
    }

    if (otp === "1111") {
      console.log("OTP Verified:", otp);
      setStep(3);
      router.push("/nextpage");
    } else {
      setError("*The code you entered is wrong");
      setOtp("");
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  // Resend OTP
  const handleResend = () => {
    setOtp("");
    setTimeLeft(60);
    setError("");
    console.log("New OTP sent!");
  };

  // slot styles
  const slotClass = `lg:w-[66px] lg:h-[66px] md:h-13 h-10 md:w-13 w-10 text-lg text-center border-2 rounded-lg transition-all 
    ${error ? "border-red-500" : "border-gray-400"} 
    hover:border-blue-500 focus:border-green-600 focus:ring-2 focus:ring-green-300`;

  // Step 3: Change Password
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPass.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (newPass !== confirmPass) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setSuccess(true);
    setStep(4);
  };

  if (step === 1) {
    return (
      <div className="max-w-[1440px] bg-[#FFF] mx-auto flex flex-col gap-10 justify-between h-screen">
        <div className="flex flex-col gap-20 justify-between">
          <Link
            href={"/"}
            className="flex gap-1 items-center lg:p-8 md:p-6 p-[18px] justify-center"
          >
            <LogoIcon />
            <Heading
              className={"font-semibold !leading-[120%] !tracking-[-0.56px]"}
              title={"daSalon"}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <form
            onSubmit={handleEmailSubmit}
            className="lg:!w-[440px] md:!w-[370px] !w-[290px] mx-auto"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:gap-3 gap-2 text-center">
                  <Heading
                    className={
                      "lg:!text-3xl font-semibold leading-[120%] !tracking-[-0.6px]"
                    }
                    title={"Verification Email"}
                  />
                  <Pragraph
                    className={"font-medium leading-[150%] tracking-[-0.32px]"}
                    title={"Welcome back! Please enter your account "}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs md:text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ex. dasalon@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-[10px] rounded-lg text-black outline-none border-[#E4E4E7] border-1 placeholder:text-sm placeholder:font-medium placeholder:leading-[142%]"
                  />
                  {error && (
                    <p className="text-red-500 text-sm pt-2">{error}</p>
                  )}
                  <Heading
                    className="md:!text-sm !text-xs font-semibold leading-[142%] tracking-[-0.28px] text-[#090606]"
                    title={"*We will send you a code to reset your password"}
                  />
                </div>
                <button
                  type="submit"
                  className="text-[#FFF] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] py-2 px-4 rounded-[6px] border-[1.5px] border-[#B751FB] bg-[#B751FB] w-full hover:bg-white hover:text-[#B751FB] duration-400 ease-in-out cursor-pointer"
                >
                  Login
                </button>
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
            </div>
          </form>
        </div>
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
    );
  }

  if (step === 2) {
    return (
      <>
        <div className="max-w-[1440px] lg:px-10 md:px-7 px-[18px] bg-[#FFF] mx-auto">
          <div className="flex flex-col gap-10 justify-between h-screen">
            <div className="flex flex-col gap-5 justify-between">
              <Link
                href={"/"}
                className="flex gap-1 items-center lg:p-8 md:p-6 p-[18px] justify-center"
              >
                <LogoIcon />
                <Heading
                  className={
                    "font-semibold !leading-[120%] !tracking-[-0.56px]"
                  }
                  title={"daSalon"}
                />
              </Link>
            </div>
            <div className="mx-auto">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col lg:gap-8 md:gap-6 gap-5">
                  <div className="flex flex-col lg:gap-3 gap-2 text-center mx-auto">
                    <Heading
                      className={
                        "lg:!text-3xl font-semibold leading-[120%] !tracking-[-0.6px]"
                      }
                      title={"Verification Code"}
                    />
                    <div className="flex gap-[1px] flex-wrap text-center mx-auto justify-center">
                      <Pragraph
                        className={
                          "font-medium leading-[150%] tracking-[-0.32px] text-nowrap"
                        }
                        title={"Code verification send to"}
                      />
                      <Pragraph
                        className={
                          "font-medium leading-[150%] tracking-[-0.32px] !text-[#B751FB]"
                        }
                        title={email}
                      />
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                  >
                    <div className="flex bg-white flex-col gap-3">
                      <Pragraph
                        className="text-xs md:text-sm font-semibold leading-[142%] tracking-[-0.28px]"
                        title={"Code Verification"}
                      />
                      <div className="flex lg:gap-3 md:gap-2 gap-1 w-full">
                        <InputOTP
                          maxLength={4}
                          value={otp}
                          onChange={(val) => {
                            setOtp(val.replace(/[^0-9]/g, ""));
                            if (error) setError("");
                          }}
                        >
                          <InputOTPGroup className="flex lg:gap-3 md:gap-2 gap-1">
                            {[0, 1, 2, 3].map((i) => (
                              <InputOTPSlot
                                key={i}
                                index={i}
                                className={slotClass}
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                        {timeLeft > 0 ? (
                          <div className="text-gray-700 flex items-center  justify-center bg-[#b751fb67] lg:w-[66px] lg:h-[66px] md:w-12 md:h-12 h-10 w-10 lg:text-sm md:text-sx text-[10px] border-[#B751FB] border-1 rounded-md">
                            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={handleResend}
                            className=" bg-[#b751fb92] lg:px-2 md:px-2 px-[6px] text-white rounded-lg text-[8px] md:text-[10px] lg:text-sm relative z-10"
                          >
                            Resend
                          </button>
                        )}
                      </div>
                    </div>
                    {error && (
                      <p className="text-red-500 lg:text-sm text-xs font-medium leading-[142%] tracking-[-0.28px] w-full mt-2">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={timeLeft <= 0}
                      className="text-[#FFF] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] py-2 px-4 rounded-[6px] border-[1.5px] border-[#B751FB] bg-[#B751FB] w-full hover:bg-white hover:text-[#B751FB] duration-400 ease-in-out cursor-pointer max-w-[226px] md:max-w-[290px] lg:max-w-[376px] lg:mt-8 md:mt-6 mt-3"
                    >
                      Verification
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
        </div>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <div className="max-w-[1440px] bg-[#FFF] mx-auto">
          <div className="flex flex-col gap-10 justify-between h-screen">
            <div className="flex flex-col gap-5 justify-between">
              <Link
                href={"/"}
                className="flex gap-1 items-center lg:p-8 md:p-6 p-[18px] justify-center"
              >
                <LogoIcon />
                <Heading
                  className={
                    "font-semibold !leading-[120%] !tracking-[-0.56px]"
                  }
                  title={"daSalon"}
                />
              </Link>
            </div>
            <div className="!max-w-[500px] mx-auto">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col lg:gap-8 md:gap-6 gap-5">
                  <div className="flex flex-col lg:gap-3 gap-2 text-center">
                    <Heading
                      className={
                        "lg:!text-3xl font-semibold leading-[120%] !tracking-[-0.6px]"
                      }
                      title={"New Password"}
                    />
                    <div className="flex gap-[1px]">
                      <Pragraph
                        className={
                          "font-medium leading-[150%] tracking-[-0.32px]"
                        }
                        title={"Add new password for your login account"}
                      />
                    </div>
                  </div>
                  <form
                    onSubmit={handlePasswordSubmit}
                    className="flex flex-col lg:gap-8 md:gap-6 gap-5"
                  >
                    <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs md:text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                          New Password
                        </label>
                        <div className="flex gap-3 justify-between py-2 px-[10px] rounded-lg text-black  border-[#E4E4E7] border-1 items-center">
                          <input
                            type="password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            placeholder="New Password"
                            className="w-full placeholder:text-sm outline-none placeholder:font-medium placeholder:leading-[142%]"
                          />

                          <EyeIcon />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs md:text-sm font-semibold leading-[142%] tracking-[-0.28px]">
                          Confirm Password
                        </label>
                        <div className="flex gap-3 justify-between py-2 px-[10px] rounded-lg text-black  border-[#E4E4E7] border-1 items-center">
                          <input
                            type="password"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full placeholder:text-sm outline-none placeholder:font-medium placeholder:leading-[142%]"
                          />
                          <div className="cursor-pointer">
                            <EyeIcon />
                          </div>
                        </div>
                      </div>
                      {error && (
                        <p className="text-red-500 lg:text-sm text-xs lg:mt-[-10px] mt-[-5px]">
                          {error}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="text-[#FFF] md:text-sm text-xs font-semibold leading-[142%] tracking-[-0.28px] py-2 px-4 rounded-[6px] border-[1.5px] border-[#B751FB] bg-[#B751FB] w-full hover:bg-white hover:text-[#B751FB] duration-400 ease-in-out cursor-pointer"
                    >
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
        </div>
      </>
    );
  }

  if (step === 4 && success) {
    return (
      <div className="bg-white max-w-[1440px] lg:px-10 md:px-8 px-[18px] mx-auto">
        <div className="flex flex-col gap-8 justify-center items-center text-center h-[100vh]">
          <ShopingCartIcon />
          <div className="flex flex-col gap-5">
            <Heading
              className={"font-semibold !leading-[120%] !tracking-[-0.56px]"}
              title={"Succes Change Password!"}
            />
            <Pragraph
              className={
                "lg:!text-sm !text-xs font-medium leading-[142%] tracking-[-0.28px] !text-[#808188] max-w-[500px]"
              }
              title={
                "Congratulations, you have successfully changed your password, immediately log in with your new password"
              }
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
