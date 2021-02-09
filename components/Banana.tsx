import * as React from "react";
import tinycolor from "tinycolor2";
import { Item } from "../types";

export const Banana: Item = ({ fill = "#FFE200" }) => {
  const [lighterColor, darkerColor] = React.useMemo(() => {
    const color = tinycolor(fill);
    return [color.lighten(15).toHexString(), color.darken(25).toHexString()];
  }, [fill]);

  return (
    <svg
      width="100%"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* THIS IS THE MAIN BANANA */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M417.112 99.8565C395.601 79.7798 452.963 65.4394 460.133 72.6096C471.606 78.3458 450.095 82.6479 451.529 92.6862C452.963 102.725 451.529 155.784 463.002 158.652C474.474 161.52 488.814 171.559 488.814 185.899C524.666 274.81 384.129 518.598 51.4305 396.704C45.6943 392.402 14.1453 356.551 8.40915 347.946C5.54106 337.908 1.23892 313.529 18.4475 304.925C166.154 266.206 336.806 342.21 414.244 168.691C427.15 138.576 417.112 99.8565 417.112 99.8565Z"
          fill={fill}
          stroke="black"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.3157 325.002L24.1838 310.661C130.303 270.508 326.767 355.117 421.414 172.993C374.091 302.057 290.916 380.929 21.3157 325.002Z"
          fill={lighterColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M414.129 94.5631C417.479 74.3718 447.537 73.8291 455.946 72.8299C469.69 74.6265 438.175 97.4312 414.129 94.5631Z"
          fill="#442400"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.42969 342.371C7.35932 321.296 6.28895 314.344 18.46 307.392C23.7568 315.342 22.7621 339.939 8.42969 342.371Z"
          fill="#442400"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M124.567 412.478C375.525 475.576 460.696 317.12 475.908 279.112C501.721 233.223 485.946 181.597 485.946 181.597C484.512 336.474 322.465 461.236 124.567 412.478Z"
          fill={darkerColor}
        />
      </g>
    </svg>
  );
};
