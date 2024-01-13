import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex gap-3 lg:gap-4 flex-1">
        <Link href="https://www.facebook.com/vijaykumarreddy.talakola.3">
          <FaFacebookF
            size={26}
            className="bg-[#3b5998] text-white rounded-full p-1"
          />
        </Link>
        <Link href="https://twitter.com/talakolavijay">
          <FaXTwitter
            size={26}
            className=" text-white bg-black rounded-full p-1"
          />
        </Link>
        <Link href="https://www.instagram.com/vijay_talakola/">
          <FaInstagram
            size={26}
            className=" bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full p-[3px]"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/talakola-vijay-kumar-reddy-1b5028231/">
          <TiSocialLinkedin
            size={26}
            className="bg-[#0072b1] text-white rounded-full p-[1px]"
          />
        </Link>
        <Link href="https://github.com/VijayKumarReddyTalakola">
          <FaGithub size={26} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
