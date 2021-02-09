import * as React from "react";
import { COLORS } from "../configs";
import { Item } from "../types";

export const Apple: Item = ({ fill = COLORS.RED }) => {
  return (
    <svg
      width="100%"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M252.154 486.08C464.864 582.886 586.659 101.537 347.619 121.09C293.298 134.46 225.108 145.918 153.506 122.824C-98.3401 97.5661 54.9096 575.588 252.149 486.083L252.154 486.08Z"
        fill={fill}
      />
      <path
        d="M275.533 42.7869C267.07 17.8274 266.197 8.04809 270.294 8.2099C294.683 3.47274 304.484 19.1602 315.35 33.3572C300.266 33.9184 294.69 39.9128 289.155 45.9308C270.87 79.4934 269.139 104.675 261.912 131.325L233.622 133.421C254.639 112.91 264.64 71.5047 275.534 42.7872L275.533 42.7869Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M258.242 86.2688C239.971 13.6576 168.834 -9.21708 112.072 5.06494C15.8227 29.2839 186.622 103.506 258.242 86.2688Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M238.337 72.1206C175.096 28.3171 143.843 25.112 97.934 21.8343"
        stroke="#3BAE28"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="257.205"
          y1="126.96"
          x2="302.243"
          y2="9.61536"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#703F06" />
          <stop offset="1" stopColor="#621E00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="197.584"
          y1="65.8867"
          x2="-2.65921"
          y2="-24.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38822B" />
          <stop offset="1" stopColor="#00CE02" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
