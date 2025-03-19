import Link from "next/link";
import Image from "next/image";

import { CalendarIcon, HeartIcon, LocationIcon } from "../common/Icons";

import { JobType } from "@/Types";
import moment from "moment";

type JobProps = {
  job: JobType;
};

export default function Job(props: JobProps) {
  const { job } = props;

  return (
    <div className="py-3 lg:py-8 bg-white text-[#707070] border border-[#F0F0F0] rounded-[5px]">
      <div className="px-4 lg:px-10 space-y-2 lg:space-y-[18px]">
        <div className="flex items-start justify-between gap-2">
          <div className="grow flex items-center gap-x-[7px] lg:gap-x-[22px]">
            <Link href="/">
              <Image src="/img/company/egabi.png" width={70} height={70} alt="Company logo" className="w-[32px] lg:w-[70px] aspect-square" />
            </Link>
            <div className="space-y-1 lg:space-y-2">
              <Link href="/" className="block text-[14px] lg:text-[25px] text-[#161616] font-medium">
                {job.title}
              </Link>
              <Link href="/" className="block text-[11px] lg:text-[17px] text-[#14A077] font-bold">
                {job.company}
              </Link>
            </div>
          </div>

          <button className="shrink-0 w-[25px] lg:w-[55px] h-[25px] lg:h-[55px] aspect-square flex items-center justify-center text-[#C4C3C3] hover:text-black bg-white border border-[#C4C3C3] hover:border-black rounded-full transition-main">
            <HeartIcon className="w-[11px] lg:w-[22px] aspect-square" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-3">
          <div className="flex items-center gap-x-1.5">
            <LocationIcon className="shrink-0 w-[8px] lg:w-[18px] h-[8px] lg:h-[18px] aspect-square" />
            <span className="text-[11px] lg:text-[17px]">{job.location}</span>
          </div>
          <div className="flex items-center gap-x-1.5">
            <CalendarIcon className="shrink-0 w-[8px] lg:w-[18px] h-[8px] lg:h-[18px] aspect-square" />
            <span className="text-[11px] lg:text-[17px]">{moment(job.postedDate).fromNow()}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-stretch gap-x-1">
          <div className="px-2 lg:px-[18px] py-0.5 lg:py-1 bg-[#F7F7F7] text-[9px] lg:text-base font-medium rounded">{job.experience}</div>
          <div className="px-2 lg:px-[18px] py-0.5 lg:py-1 bg-[#F7F7F7] text-[9px] lg:text-base font-medium rounded">{job.type}</div>
          <div className="px-2 lg:px-[18px] py-0.5 lg:py-1 bg-[#F7F7F7] text-[9px] lg:text-base font-medium rounded">{job.workMode}</div>
        </div>
      </div>

      <div className="w-full h-px my-2 lg:my-[27px] bg-[#F0F0F0]"></div>

      <div className="px-4 lg:px-10">
        <p className="flex items-center gap-x-2.5 text-[10px] lg:text-[17px]">
          {job.categories.map((category, idx) => (
            <>
              <span>{category}</span>
              {idx + 1 < job.categories.length && <span>-</span>}
            </>
          ))}
        </p>
      </div>
    </div>
  );
}
