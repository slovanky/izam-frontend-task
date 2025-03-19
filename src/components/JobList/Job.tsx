import { Job } from "@/Types";
import Link from "next/link";
import { CalendarIcon, HeartIcon, LocationIcon } from "../common/Icons";
import Image from "next/image";

type JobProps = {
  job: Job;
};

export default function Job(props: JobProps) {
  const { job } = props;

  return (
    <div>
      <div className="py-8 bg-white text-[#707070] border border-[#F0F0F0] rounded-[5px]">
        {/*  */}
        <div className="px-10 flex items-start justify-between">
          <div className="space-y-[18px]">
            <div className="grow flex items-center gap-x-[22px]">
              <Link href="/">
                <Image src="/img/company/egabi.png" width={70} height={70} alt="Company logo" />
              </Link>
              <div className="space-y-2">
                <Link href="/" className="block text-[25px] text-[#161616] font-medium">
                  Senior UX UI Designer
                </Link>
                <Link href="/" className="block text-[17px] text-[#14A077] font-bold">
                  Egabi
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3">
              <div className="flex items-center gap-x-1.5">
                <LocationIcon className="shrink-0 w-[18px] h-[18px] aspect-square" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <CalendarIcon className="shrink-0 w-[18px] h-[18px] aspect-square" />
                <span>month ago</span>
              </div>
            </div>

            <div className="flex flex-wrap items-stretch gap-x-1">
              <div className="px-[18px] py-1 bg-[#F7F7F7] text-base font-medium rounded">0 - 3y of exp</div>
              <div className="px-[18px] py-1 bg-[#F7F7F7] text-base font-medium rounded">Full time</div>
              <div className="px-[18px] py-1 bg-[#F7F7F7] text-base font-medium rounded">Hybrid</div>
            </div>
          </div>

          <button className="shrink-0 w-[55px] h-[55px] aspect-square flex items-center justify-center text-[#C4C3C3] hover:text-black bg-white border border-[#C4C3C3] hover:border-black rounded-full transition-main">
            <HeartIcon className="" />
          </button>
        </div>

        <div className="w-full h-px my-[27px] bg-[#F0F0F0]"></div>

        <div className="px-10">
          <p className="flex items-center gap-x-2.5 text-[17px]">
            <span>Creative / Design</span>
            <span>-</span>
            <span>IT / Software development</span>
          </p>
        </div>
      </div>
    </div>
  );
}
