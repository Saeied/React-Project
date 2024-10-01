import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import CourseCard from "../../../common/CourseCard";

const fetchCourses = (pageNumber) =>
  axios.get(
    `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=9&SortingCol=Active&SortType=DESC&TechCount=0`
  );

function CoursesList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["courses", page],
    queryFn: () => fetchCourses(page),
  });

  if (isLoading) {
    return <div className="text-xl p-4">در حال دریافت اطلاعات</div>;
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4">
        {data.data.courseFilterDtos.map((course) => (
          <CourseCard key={course.courseId} {...course} />
        ))}
      </div>
      <Pagination
        style={{ direction: "ltr" }}
        className="mt-4"
        classNames={{
          base: "flex justify-center",
          item: "rounded-full mx-1",
          cursor: "bg-primary rounded-full",
        }}
        total={Math.ceil(data.data.totalCount / 9)}
        page={page}
        showControls
        onChange={(number) => setPage(number)}
      />
    </>
  );
}

export default CoursesList;
