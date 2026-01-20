import React from "react";

import ArrowBack from "@/app/icons/arrow-back.svg";
import ArrowDown from "@/app/icons/arrow-down.svg";
import ArrowNext from "@/app/icons/arrow-next.svg";
import ArrowTop from "@/app/icons/arrow-top.svg";

import Call from "@/app/icons/call.svg";
import Close from "@/app/icons/close.svg";
import Competencies from "@/app/icons/competencies.svg";
import Copy from "@/app/icons/copy.svg";
import Degrees from "@/app/icons/degrees.svg";
import Experiences from "@/app/icons/experiences.svg";
import Home from "@/app/icons/home.svg";
import Linkedin from "@/app/icons/linkedIn.svg";
import Mail from "@/app/icons/mail.svg";
import Menu from "@/app/icons/menu.svg";
import Tools from "@/app/icons/tools.svg";

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
};

export default function Icon({ name, size = 24, color = "currentColor", ...props }) {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    throw new Error(`Icon "${name}" does not exist`);
  }

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