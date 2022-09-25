import * as React from "react";

function SvgAkademicStaffTitle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={209} height={92} {...props}>
      <g data-name="Group 82">
        <text
          data-name="Akademik"
          transform="translate(0 42)"
          fontSize={40}
          fontFamily="Poppins-Regular, Poppins"
        >
          <tspan x={0} y={0}>
            {"Akademik"}
          </tspan>
        </text>
        <text
          transform="translate(105 81)"
          fill="#f2164a"
          fontSize={30}
          fontFamily="Poppins-Light, Poppins"
          fontWeight={300}
        >
          <tspan x={0} y={0}>
            {"Kadro"}
          </tspan>
        </text>
        <path
          data-name="Line 8"
          fill="none"
          stroke="#000"
          strokeWidth={3}
          d="M189.5 49.5h-84"
        />
      </g>
    </svg>
  );
}

export default SvgAkademicStaffTitle;
