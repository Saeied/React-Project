import CoursesBox from "./CoursesBox";
import InputSection from "./InputSection";

function CoursesSection() {
  return (
    <div className="w-full lg:w-[70%] xl:w-[75%] bg-slate-500 h-[900px]">
      <InputSection />
      <CoursesBox />
    </div>
  );
}

export default CoursesSection;
