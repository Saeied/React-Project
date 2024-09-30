import SearchInput from "../../../common/SearchInput";

function InputSection() {
  return (
    <div id="top" className="flex flex-col md:flex-row gap-5">
      <div className="w-full md:w-[80%] bg-red-800 h-20 flex items-center">
        <SearchInput />
      </div>
      <div className="w-full md:w-[20%] bg-purple-700 h-20 flex items-center">
        <select className="w-full text-lg py-1">
          <option value="" className="">
            محبوب ترین ها
          </option>
        </select>
      </div>
    </div>
  );
}

export default InputSection;
