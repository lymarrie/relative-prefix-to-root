import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "@yext/pages/components";

export interface CtaProps {
  buttonText: string;
  url?: string;
  style?: string;
}

const Cta = ({ buttonText, url, style }: CtaProps) => {
  return (
    <>
      <Link
        href={url}
        className={twMerge(
          "py-4 px-6 text-base font-bold rounded-lg hover:scale-[1.02] duration-250",
          style
        )}
        target=""
        rel="noopener noreferrer"
        eventName={`cta Click: ${buttonText}`}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default Cta;
