import ScrollCardsMobile from "./PioneersSectionMobile";
import ScrollCards from "./PioneersSectionWeb";

export default function PioneersSection() {
  return (
    <>
      <div className="block lg:hidden">
        <ScrollCardsMobile />
      </div>

      <div className="hidden lg:block">
        <ScrollCards />
      </div>
    </>
  );
}