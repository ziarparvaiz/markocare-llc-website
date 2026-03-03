import React from "react";

interface MarkoCareIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const MarkoCareIcon: React.FC<MarkoCareIconProps> = ({
  size = 120,
  color = "#7AC943",
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ev + kalp birleşik ana şekil: çatı, duvarlar kalp eğrileriyle bütünleşik */}
      <path
        d="M50 8 L18 40
           C5 52 8 78 50 90
           C92 78 95 52 82 40
           L50 8 Z"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Pencere: 4 bölmeli kare */}
      <rect
        x="40"
        y="48"
        width="20"
        height="20"
        rx="2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M50 48 L50 68 M40 58 L60 58"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MarkoCareIcon;
