"use client";

import { useRouter } from "next/navigation";

import Heading from "@/components/comman/Heading";
import Pragraph from "@/components/comman/Pragraph";
import { settingData } from "@/components/helper/Helper";

function Setting() {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path); // Next.js route
  };

  return (
    <div>
      <div className="border-b-1 border-[#DCE0E5]">
        <div className="p-6">
          <Heading
            className="lg:!text-xl md:!text-lg !text-base font-semibold leading-[120%] tracking-[-0.4px] !text-[#030712]"
            title={"Setting"}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[40px_50px] justify-center max-w-[940px] mx-auto mt-30">
        {settingData.map((item, index) => (
          <div
            onClick={() => handleClick(item.path)}
            key={index}
            className="border-[#E4E7EB] border-1 rounded-2xl flex flex-col gap-3 p-4 w-[345px] cursor-pointer"
          >
            <div>{item.icon}</div>
            <Heading
              className={"!text-base !text-[#030712] font-semibold"}
              title={item.title}
            />
            <Pragraph
              className={"!text-xs !text-[#030712] font-normal"}
              title={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Setting;
