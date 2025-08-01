import CardContainer from "@/components/card-container";
import Hero from "@/components/hero";
import Matches from "@/components/matches";

export default function Home() {
  return (
    <>
      <Hero />
      <Matches />
      <CardContainer />
      <div className="w-full flex justify-center mb-10">
        <button className="bg-primary-btn rounded-sm mt-[32.31px] md:mt-[54px] mx-auto text-white py-[3px] md:py-[2px] px-[29px] text-xl font-medium">
          See More Professionals
        </button>
      </div>
    </>
  );
}
