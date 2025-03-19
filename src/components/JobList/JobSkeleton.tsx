export default function JobSkeleton() {
  return (
    <div className="py-3 lg:py-8 bg-white border border-[#F0F0F0] rounded-[5px] animate-pulse">
      <div className="px-4 lg:px-10 space-y-2 lg:space-y-[18px]">
        <div className="flex items-start justify-between gap-2">
          <div className="grow flex items-center gap-x-[7px] lg:gap-x-[22px]">
            <div className="w-[32px] lg:w-[70px] aspect-square bg-gray-100 rounded" />

            <div className="grow space-y-1 lg:space-y-2">
              <span className="h-[18px] lg:h-[37px] w-1/2 block bg-gray-100 rounded"></span>
              <span className="h-[12px] lg:h-[25px] w-1/3 block bg-gray-100 rounded"></span>
            </div>
          </div>

          <button className="shrink-0 w-[25px] lg:w-[55px] h-[25px] lg:h-[55px] aspect-square bg-gray-100 rounded-full"></button>
        </div>

        <div className="h-4 lg:h-[32px] w-2/5 bg-gray-100 rounded"></div>

        <div className="h-[17px] lg:h-[32px] w-3/5 bg-gray-100 rounded"></div>
      </div>

      <div className="w-full h-px my-2 lg:my-[27px] bg-[#F0F0F0]"></div>

      <div className="px-4 lg:px-10">
        <span className="h-[15px] lg:h-[25px] w-1/3 block bg-gray-100 rounded"></span>
      </div>
    </div>
  );
}
