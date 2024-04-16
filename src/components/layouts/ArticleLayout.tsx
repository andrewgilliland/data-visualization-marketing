"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";

type BaseLayoutProps = {
  title: string;
  children: React.ReactNode;
  page: number;
};

const ArticleLayout: FC<BaseLayoutProps> = ({ title, children, page }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const router = useRouter();

  function pollGamepads() {
    // Grab a list of gamepads that are currently connected or a empty array
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    // console.log(gamepads);

    const pressedButtons = [];

    // Loop through all gamepads connect to the computer
    for (let g = 0; g < gamepads.length; g++) {
      const gp = gamepads[g];
      if (!!gp) {
        // Loop through all gamepad buttons pick out pressed ones
        for (let b = 0; b < gp.buttons.length; b++) {
          if (gp.buttons[b].pressed) {
            pressedButtons.push(b);
          }
        }
      }
    }

    // console.log(`Currently pressing: ${pressedButtons.join(" + ")}`);
    // debounce(pressedButton(pressedButtons, 0), 1000);
    // pressedButton(pressedButtons, 0);

    if (pressedButtons.join(" + ") === "0") {
      // console.log("Pressed button 0");
      console.log("pageNumber: ", pageNumber + 1);
      setPageNumber((prev) => prev + 1);
      console.log(`/page/${pageNumber}`);
      router.push(`/page/${pageNumber}`);
    }
  }

  useEffect(() => {
    // console.log("useEffect page: ----------------------------: ", pageNumber);
    // window.addEventListener("gamepadconnected", function (event) {
    //   const gamepad = event.gamepad;
    //   console.log(`Gamepad connected at index ${gamepad.index}: ${gamepad.id}.
    //   ${gamepad.buttons.length} buttons, ${gamepad.axes.length} axes.`);
    //   let interval;
    //   if (!("ongamepadconnected" in window)) {
    //     // No gamepad events available, poll instead.
    //     interval = setInterval(pollGamepads, 100);
    //   }
    // });
    // return () => window.removeEventListener("gamepadconnected", pollGamepads);
  }, [pageNumber]);

  return (
    <div className="">
      <h1 className="font-bold font-heading text-slate-900 text-3xl">
        {title}
      </h1>
      <article className="max-w-screen-sm">{children}</article>
      <div className="flex justify-between items-center pt-12">
        <Link
          className={page === 1 ? "invisible" : ""}
          href={`/page/${page - 1}`}
        >
          <Button iconPosition="left">Prev</Button>
        </Link>

        <Link className={page === 1 ? "" : ""} href={`/page/${page + 1}`}>
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleLayout;
