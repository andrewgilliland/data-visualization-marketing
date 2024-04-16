import React, { FC } from "react";

// import { getXOffset, getYOffset } from "./utils/math";

export const radian = Math.PI / 180;
export const getXOffsetMultiplayerByAngle = (angle: number) =>
  Math.cos(angle - 90 * radian);
export const getYOffsetMultiplayerByAngle = (angle: number) =>
  Math.sin(angle - 90 * radian);
export const getXOffset = (offset: number, angle: number) =>
  offset * getXOffsetMultiplayerByAngle(angle);
export const getYOffset = (offset: number, angle: number) =>
  offset * getYOffsetMultiplayerByAngle(angle);
export const getAverage = (array: number[]) =>
  array.reduce((acc: number, cur: number) => acc + cur, 0) / array.length;

type LabelLineProps = {
  cx: number;
  cy: number;
  midAngle: number;
  middleRadius: number;
  radius: number;
};

const LabelLine: FC<LabelLineProps> = ({
  cx,
  cy,
  midAngle,
  middleRadius,
  radius,
}) => {
  const xStart = cx + getXOffset(middleRadius, midAngle);
  const yStart = cy + getYOffset(middleRadius, midAngle);

  const offSetMiddle = 2 * radius - middleRadius;
  const xMiddle = cx + getXOffset(offSetMiddle, midAngle);
  const yMiddle = cy + getYOffset(offSetMiddle, midAngle);

  const offSetEnd = 2.5 * radius - middleRadius;
  const xEnd = cx + getXOffset(offSetEnd, midAngle);

  return (
    <polyline
      style={{
        opacity: "0.3",
        fill: "none",
        stroke: "black",
        strokeWidth: "1px",
        strokeDasharray: "1",
      }}
      points={`${xStart},${yStart} ${xMiddle},${yMiddle} ${xEnd},${yMiddle}`}
    />
  );
};

export default LabelLine;
