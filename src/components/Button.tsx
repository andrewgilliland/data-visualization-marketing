import { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  iconPosition?: "left" | "right";
};

const Button: FC<ButtonProps> = ({ children, iconPosition = "right" }) => {
  const iconPositionLeft = iconPosition === "left";

  return (
    <button
      className={`group bg-black ${
        iconPositionLeft ? "pl-3 pr-4" : "pl-4 pr-3"
      } py-2 rounded-md font-bold font-heading text-xl`}
    >
      <div
        className={`flex ${
          iconPositionLeft ? "flex-row-reverse" : "flex-row"
        } items-center gap-2.5`}
      >
        <div className="text-white">{children}</div>
        <svg
          className={`${
            iconPositionLeft && "rotate-180"
          } stroke-[3] stroke-current stroke-round fill-none`}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <g fillRule="evenodd">
            <path
              className="transition opacity-0 group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="transition group-hover:translate-x-[3px]"
              d="M1 1l4 4-4 4"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  );
};

export default Button;
