import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTiktokFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import RiseAtSevenLogo from "../assets/svg/footherlogo.svg";

const SocialIcon = ({ icon: Icon, href = "#" }) => (
  <a
    href={href}
    className="footer-social-icon flex items-center justify-center h-5 w-[46px] rounded-full hover:rounded-md bg-white text-black md:w-[46px] md:h-5 md:gap-1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="flex items-center gap-1">
      <Icon size={12} />
      <MdArrowOutward size={10} />
    </span>
    <span className="sr-only">social link</span>
  </a>
);

const NavLink = ({ children, href = "#" }) => (
  <a
    href={href}
    className="group inline-flex w-fit text-white text-[18px] leading-[1.3] transition-colors duration-150 whitespace-nowrap
    md:text-[22px] md:font-semibold lg:text-[23px] xl:text-[24px] font-bold"
  >
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full text-[#B2F6E3] transition-transform duration-300 ease-out group-hover:translate-y-0">
        {children}
      </span>
    </span>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#111111] rounded-3xl overflow-hidden w-full px-[18px] pb-7 pt-[50px] md:pt-10 md:px-8 md:py-10">
      <style>{`
       

        
      `}</style>
      <div>
        {/* Desktop / Tablet Layout: md, lg, xl */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(380px,1fr)_minmax(150px,0.38fr)_minmax(180px,0.42fr)_minmax(150px,0.34fr)] xl:grid-cols-[minmax(520px,1fr)_minmax(210px,0.42fr)_minmax(240px,0.46fr)_minmax(200px,0.36fr)] 2xl:grid-cols-[minmax(620px,1fr)_minmax(340px,0.45fr)_minmax(360px,0.45fr)_minmax(280px,0.35fr)] lg:gap-x-3 xl:gap-x-8 2xl:gap-x-14">
          <div className="flex flex-col gap-5 min-w-[360px]">
            <p className="text-white font-semibold text-[26px] lg:text-[28px] xl:text-[29px] leading-snug">
              Stay updated with Rise news
            </p>

            <div className="relative flex items-center max-w-[660px]">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-[70px] bg-[#2a2a2a] text-white placeholder-white/45 text-[22px] font-semibold rounded-full pl-6 pr-20 outline-none border border-transparent focus:border-[#343535] focus:ring-[2px] focus:ring-[#343535] transition-all duration-300"
              />
              <button className="absolute right-2 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#B2F6E3] hover:bg-[#FFFFFF] transition-colors group">
                <MdArrowOutward
                  size={24}
                  className="text-black transition-transform duration-300 group-hover:rotate-[90deg]"
                />
              </button>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <SocialIcon icon={FaFacebookF} />
              <SocialIcon icon={BsTwitterX} />
              <SocialIcon icon={BiLogoLinkedin} />
              <SocialIcon icon={FaYoutube} />
              <SocialIcon icon={RiTiktokFill} />
              <SocialIcon icon={FaInstagram} />
            </div>
          </div>

          <div className="flex flex-col gap-3 border-l border-white/20 pl-3">
            <NavLink>Services</NavLink>
            <NavLink>Work</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Culture</NavLink>
            <NavLink>Meet The Risers</NavLink>
          </div>

          <div className="flex flex-col gap-3 border-l border-white/20 pl-3">
            <NavLink>Testimonials</NavLink>
            <NavLink>Blog &amp; Resources</NavLink>
            <NavLink>Webinars</NavLink>
            <NavLink>Careers</NavLink>
          </div>

          <div className="flex flex-col gap-3 border-l border-white/20 pl-3">
            <NavLink>Sheffield</NavLink>
            <NavLink>Manchester</NavLink>
            <NavLink>London</NavLink>
            <NavLink>New York</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold text-[24px] leading-snug">
              Stay updated with Rise news
            </p>

            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#1e1e1e] text-white placeholder-white/40 text-[20px] rounded-full py-3 pl-5 pr-14 outline-none border border-transparent focus:border-[#4ECDB4] transition-colors"
              />
              <button className="absolute right-1.5 flex items-center justify-center w-9 h-9 rounded-full bg-[#B2F6E3] hover:bg-[#FFFFFF] transition-colors group">
                <MdArrowOutward
                  size={17}
                  className="text-black transition-transform duration-300 group-hover:rotate-[90deg]"
                />
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <SocialIcon icon={FaFacebookF} />
              <SocialIcon icon={BsTwitterX} />
              <SocialIcon icon={BiLogoLinkedin} />
              <SocialIcon icon={FaYoutube} />
              <SocialIcon icon={RiTiktokFill} />
              <SocialIcon icon={FaInstagram} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-3 mt-8">
            <div className="flex flex-col gap-2 border-l border-white/15 pl-4">
              <NavLink>Services</NavLink>
              <NavLink>Work</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Culture</NavLink>
              <NavLink>Meet The Risers</NavLink>
            </div>

            <div className="flex flex-col gap-2 border-l border-white/15 pl-4">
              <NavLink>Testimonials</NavLink>
              <NavLink>Blog &amp; Resources</NavLink>
              <NavLink>Webinars</NavLink>
              <NavLink>Careers</NavLink>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-l border-white/15 pl-4">
            <NavLink>Sheffield</NavLink>
            <NavLink>Manchester</NavLink>
            <NavLink>London</NavLink>
            <NavLink>New York</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>
      </div>

      <div className="my-16 md:my-0 md:mt-36 md:px-0 overflow-hidden leading-none select-none">
        <img
          src={RiseAtSevenLogo}
          alt="Rise at Seven"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-4 md:mt-8 md:px-0 md:pb-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
        <p className="text-white text-[11px] md:text-[12px] leading-[2.2] md:leading-[2]">
          © 2025 Rise at Seven Ltd. All rights reserved &nbsp;•&nbsp; Company
          Number 11955187 &nbsp;•&nbsp; VAT Registered GB 322402945
          &nbsp;•&nbsp;{" "}
          <a
            href="#"
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Privacy Policy
          </a>{" "}
          &nbsp;•&nbsp;{" "}
          <a
            href="#"
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Terms &amp; conditions
          </a>
        </p>

        <p className="text-white text-[11px] md:text-[12px] md:text-right">
          <a
            href="#"
            className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Website MadeByShape
          </a>
        </p>
      </div>
    </footer>
  );
}
