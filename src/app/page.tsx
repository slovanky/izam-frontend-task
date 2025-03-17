//
import SideFilterMenu from "../components/SideFilterMenu";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <div className="w-full h-[98px] flex items-center justify-center bg-[#161616] text-gray-500">Top Nav Here</div>

      <div className="grow flex items-start">
        <SideFilterMenu />
        <div className="grow px-[24px] py-[36px]">
          <div className="bg-red-200">Page Content Here</div>
        </div>
      </div>
    </div>
  );
}
