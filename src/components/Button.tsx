const Button = ({}) => {
  return (
    <button className="group bg-black pl-4 pr-3 py-2 rounded-md font-bold font-heading text-xl">
      <div className="flex items-center gap-2">
        <div>Next</div>
        <svg
          className="stroke-[3] stroke-current stroke-round fill-none"
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
