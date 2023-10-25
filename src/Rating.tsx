/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-spread */
"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import "./Rating.css";

export interface RatingProps {
  length?: number;
  size?: number;
  value: number;
  setValue?: React.Dispatch<SetStateAction<number>>;
  color: string;
  readOnly?: boolean;
  className?: string;
}

function Rating(props: RatingProps) {
  const [hoverValue, setHoverValue] = useState(props.value);
  useEffect(() => {
    setHoverValue(props.value);
  }, [props.value]);

  const readOnly = props.readOnly || false;

  return (
    <div
      onMouseLeave={() => {
        setHoverValue(props.value);
      }}
      className={`container ${props.className || ""}`}
    >
      {Array.apply(null, Array(props.length || 5)).map((_item, key) => (
        <div
          key={key}
          style={{
            position: "relative",
            color: props.color,
          }}
          className={!readOnly ? "icon" : ""}
        >
          <button
          type="button"
            className="star-react-rating"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: (props.size || 24) / 2,
              cursor: !readOnly ? "pointer" : "",
            }}
            onClick={() => (props.setValue ? props.setValue(key + 0.5) : null)}
            onMouseEnter={() => {
              if (!readOnly) {
                setHoverValue(key + 0.5);
              }
            }}
            disabled={readOnly}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={key < hoverValue ? props.color : "none"}
              viewBox="0 0 12 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{
                width: (props.size || 24) / 2,
                height: props.size || 24,
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
          <button
          type="button"
            className="star-react-rating"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: (props.size || 24) / 2,
              cursor: !readOnly ? "pointer" : "",
            }}
            onClick={() => (props.setValue ? props.setValue(key + 1) : null)}
            onMouseEnter={() => {
              if (!readOnly) {
                setHoverValue(key + 1);
              }
            }}
            disabled={readOnly}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={key + 0.5 < hoverValue ? props.color : "none"}
              viewBox="12 0 12 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={(props.size || 24) / 2}
              height={props.size || 24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
          <svg
            style={{
              visibility: "hidden",
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={props.size || 24}
            height={props.size || 24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Rating;
