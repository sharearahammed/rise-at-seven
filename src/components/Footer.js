import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import RiseAtSevenLogo from "../assets/svg/footherlogo.svg"

const SocialIcon = ({ icon: Icon, href = "#" }) => (
  <a
    href={href}
    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-[#4ECDB4] hover:text-[#4ECDB4] text-white transition-all duration-200 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={13} />
    <span className="sr-only">social link</span>
  </a>
);

const NavLink = ({ children, href = "#" }) => (
  <a
    href={href}
    className="block text-white font-medium text-[15px] leading-[1.15] hover:text-[#4ECDB4] transition-colors duration-150 whitespace-nowrap"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#111111] rounded-2xl overflow-hidden w-full px-[28px] py-[40px]">
      {/* Top Section */}
      <div>
        {/* Desktop Layout: 4 columns */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_auto_auto] md:gap-x-12 lg:gap-x-20 xl:gap-x-28">
          {/* Col 1: Newsletter + Socials */}
          <div className="flex flex-col gap-5 min-w-[220px]">
            <p className="text-white font-semibold text-[17px] leading-snug">
              Stay updated with Rise news
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#1e1e1e] text-white placeholder-white/40 text-sm rounded-full py-3 pl-5 pr-14 outline-none border border-transparent focus:border-[#4ECDB4] transition-colors"
              />
              <button className="absolute right-1.5 flex items-center justify-center w-9 h-9 rounded-full bg-[#4ECDB4] hover:bg-[#3ab89e] transition-colors">
                <MdArrowOutward size={17} className="text-black" />
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2 flex-wrap">
              <SocialIcon icon={FaFacebookF} />
              <SocialIcon icon={BsTwitterX} />
              <SocialIcon icon={BiLogoLinkedin} />
              <SocialIcon icon={FaYoutube} />
              <SocialIcon icon={RiTiktokFill} />
              <SocialIcon icon={FaInstagram} />
            </div>
          </div>

          {/* Col 2: Primary nav */}
          <div className="flex flex-col gap-3 pt-1">
            <NavLink>Services</NavLink>
            <NavLink>Work</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Culture</NavLink>
            <NavLink>Meet The Risers</NavLink>
          </div>

          {/* Col 3: Secondary nav */}
          <div className="flex flex-col gap-3 pt-1">
            <NavLink>Testimonials</NavLink>
            <NavLink>Blog &amp; Resources</NavLink>
            <NavLink>Webinars</NavLink>
            <NavLink>Careers</NavLink>
          </div>

          {/* Col 4: Locations */}
          <div className="flex flex-col gap-3 pt-1">
            <NavLink>Sheffield</NavLink>
            <NavLink>Manchester</NavLink>
            <NavLink>London</NavLink>
            <NavLink>New York</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8">
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold text-[18px] leading-snug">
              Stay updated with Rise news
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#1e1e1e] text-white placeholder-white/40 text-sm rounded-full py-3 pl-5 pr-14 outline-none border border-transparent focus:border-[#4ECDB4] transition-colors"
              />
              <button className="absolute right-1.5 flex items-center justify-center w-9 h-9 rounded-full bg-[#4ECDB4] hover:bg-[#3ab89e] transition-colors">
                <MdArrowOutward size={17} className="text-black" />
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2 flex-wrap">
              <SocialIcon icon={FaFacebookF} />
              <SocialIcon icon={BsTwitterX} />
              <SocialIcon icon={BiLogoLinkedin} />
              <SocialIcon icon={FaYoutube} />
              <SocialIcon icon={RiTiktokFill} />
              <SocialIcon icon={FaInstagram} />
            </div>
          </div>

          {/* Nav grid: 2 cols */}
          <div className="grid grid-cols-2 gap-x-4">
            {/* Left col */}
            <div className="flex flex-col gap-3 border-l border-white/15 pl-4">
              <NavLink>Services</NavLink>
              <NavLink>Work</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Culture</NavLink>
              <NavLink>Meet The Risers</NavLink>
            </div>
            {/* Right col */}
            <div className="flex flex-col gap-3 border-l border-white/15 pl-4">
              <NavLink>Testimonials</NavLink>
              <NavLink>Blog &amp; Resources</NavLink>
              <NavLink>Webinars</NavLink>
              <NavLink>Careers</NavLink>
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-3 border-l border-white/15 pl-4">
            <NavLink>Sheffield</NavLink>
            <NavLink>Manchester</NavLink>
            <NavLink>London</NavLink>
            <NavLink>New York</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Big Brand Name */}
      <div className="mt-6 px-2 md:px-4 overflow-hidden leading-none select-none">
        <img
          src={RiseAtSevenLogo}
          alt="Rise at Seven"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 px-6 md:px-10 lg:px-12 pb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
        <p className="text-white/40 text-[11px] leading-relaxed">
          © 2025 Rise at Seven Ltd. All rights reserved &nbsp;•&nbsp; Company
          Number 11955187 &nbsp;•&nbsp; VAT Registered GB 322402945
          &nbsp;•&nbsp;{" "}
          <a href="#" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </a>{" "}
          &nbsp;•&nbsp;{" "}
          <a href="#" className="hover:text-white/70 transition-colors">
            Terms &amp; conditions
          </a>
        </p>
        <p className="text-white/40 text-[11px] md:text-right">
          Website{" "}
          <a href="#" className="hover:text-white/70 transition-colors">
            MadeByShape
          </a>
        </p>
      </div>
    </footer>
  );
}