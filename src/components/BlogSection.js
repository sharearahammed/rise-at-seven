import BlogSectionMobile from "./BlogSectionMobile";
import BlogSectionWeb from "./BlogSectionWeb";

export default function BlogSection() {
  return (
    <>
      <div className="block lg:hidden">
        <BlogSectionMobile />
      </div>

      <div className="hidden lg:block">
        <BlogSectionWeb />
      </div>
    </>
  );
}