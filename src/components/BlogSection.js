import BlogSectionMobile from "./BlogSectionMobile";
import BlogSectionWeb from "./BlogSectionWeb";

export default function BlogSection({ ref }) {
  return (
    <>
      <div className="block lg:hidden">
        <BlogSectionMobile />
      </div>

      <div className="hidden lg:block">
        <BlogSectionWeb ref={ref} />
      </div>
    </>
  );
}