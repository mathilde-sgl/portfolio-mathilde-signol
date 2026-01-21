import React from "react";

import ArrowBack from "@/styles/icons/arrow-back.svg";
import ArrowDown from "@/styles/icons/arrow-down.svg";
import ArrowNext from "@/styles/icons/arrow-next.svg";
import ArrowTop from "@/styles/icons/arrow-top.svg";

import Call from "@/styles/icons/call.svg";
import Close from "@/styles/icons/close.svg";
import Competencies from "@/styles/icons/competencies.svg";
import Copy from "@/styles/icons/copy.svg";
import Degrees from "@/styles/icons/degrees.svg";
import Experiences from "@/styles/icons/experiences.svg";
import Home from "@/styles/icons/home.svg";
import Linkedin from "@/styles/icons/linkedIn.svg";
import Mail from "@/styles/icons/mail.svg";
import Menu from "@/styles/icons/menu.svg";
import Tools from "@/styles/icons/tools.svg";

const icons = {
  "arrow-back": ArrowBack,
  "arrow-down": ArrowDown,
  "arrow-next": ArrowNext,
  "arrow-top": ArrowTop,
  call: Call,
  close: Close,
  competencies: Competencies,
  copy: Copy,
  degrees: Degrees,
  experiences: Experiences,
  home: Home,
  linkedin: Linkedin,
  mail: Mail,
  menu: Menu,
  tools: Tools,
} as const;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number | string;
  color?: string;
} & React.SVGProps<SVGSVGElement>;

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) {
  const SvgIcon = icons[name];

  return (
    <SvgIcon
      width={size}
      height={size}
      fill={color}
      aria-label={name}
      {...props}
    />
  );
}