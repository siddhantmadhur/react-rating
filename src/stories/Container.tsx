import React, { useEffect, useState } from "react";
import Rating, { RatingProps } from "../Rating";

function Container(props: RatingProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((e) => (e >= 5 ? 0 : e + 0.5));
    }, 2000);
  }, []);

  return (
    <div>
      <Rating {...props} setValue={setValue} value={value} />
      {value}
    </div>
  );
}

export default Container;
