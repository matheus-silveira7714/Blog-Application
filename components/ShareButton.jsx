"use client";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";
import { IoMdShare } from "react-icons/io";
import { usePathname } from "next/navigation";

const ShareButton = ({}) => {
  const url = process.env.NEXT_PUBLIC_NEXTAUTH_URL+ usePathname();

  return (
    <>
      <div className="flex flex-wrap gap-3 lg:gap-2 xl:gap-4 items-center">
        <IoMdShare size={28} />
        <div className="flex flex-wrap gap-2 items-center justify-center cursor-pointer">
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <PinterestShareButton url={url} media={url}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
          <RedditShareButton url={url}>
            <RedditIcon size={32} round={true} />
          </RedditShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton url={url}>
            <XIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
};

export default ShareButton;
