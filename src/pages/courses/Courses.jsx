import ProductCard from "../../components/common/ProductCard";
import SearchInput from "../../components/common/SearchInput";

function Courses() {
  return (
    <>
      <h1>courses page</h1>
      <div className="px-0 sm:px-[2rem] md:px-[3rem] lg:px-[4rem] container flex justify-center bg-purple-300">
        <div id="filters" className="hidden lg:block lg:w-[30%] xl:w-[20%] bg-blue-500 h-[900px]"></div>


        <div id="courseSection" className="w-full lg:w-[70%] xl:w-[80%] bg-green-500 h-[900px]">

          <div id="top" className="flex flex-col md:flex-row">
            <div className="w-full md:w-[80%] bg-purple-200 h-20 flex items-center">
              <SearchInput />
            </div>
            <div className="w-full md:w-[20%] bg-purple-700 h-20 flex items-center">
              <select className="w-full text-lg py-1">
                <option value="" className="">محبوب ترین ها</option>
              </select>
            </div>
          </div>
          

          <div id="bottom" className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div>


        </div>
      </div>
    </>
  );
}

export default Courses;
