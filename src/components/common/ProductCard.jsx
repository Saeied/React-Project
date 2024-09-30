import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { GoClock } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

function ProductCard() {
  return (
    <Card
      className="p-4 w-[296px]"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardHeader className="overflow-visible p-0 max-w-full">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-[180px]"
          classNames={{ wrapper: "w-full" }}
          src={`https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%BE%D8%B1%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%D8%AA%D8%B1%DB%8C%D9%86_%D9%85%D8%A7%DA%98%D9%88%D9%84_%D9%87%D8%A7%DB%8C_%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA_%D8%AF%D8%B1_React.jpg`}
        />
      </CardHeader>
      <CardBody className="text-right px-0">
        <h3 className="text-lg">دوره جامع React.js صفر تا صد</h3>
        <div className="flex justify-center mt-4 p-4 gap-3 rounded-[1.5rem] bg-[#ECEFF1]">
          <p className="text-sm flex justify-center items-center gap-1">
            <FiBookOpen />
            202درس
          </p>
          <p className="text-sm flex justify-center items-center gap-1">
            <GoClock /> 14ساعت
          </p>
          <p className="text-sm flex justify-center items-center gap-1">
            <IoCalendarOutline /> 1آذر1402
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p>
            <b>مدرس:</b> دکتر بحرالعلوم
          </p>
          <p>256 دانش‌آموز</p>
        </div>
      </CardBody>
      <CardFooter className="justify-between p-0 mt-1">
        <p className="flex items-center gap-1 text-lg text-[#f44336] bg-[#ffebee] py-2 px-5 rounded-full">
          <FaRegHeart />
          12
        </p>
        <p className="text-md">
          <b className="text-[#2196f3] me-1 text-lg">500,000</b> تومان
        </p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
