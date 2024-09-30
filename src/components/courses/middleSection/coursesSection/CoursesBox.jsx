import ProductCard from "../../../common/ProductCard";

function CoursesBox() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4 bg-yellow-400">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default CoursesBox;
