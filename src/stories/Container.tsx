import React, { useState } from "react";
import Rating, { RatingProps } from "../Rating";

function Container(props: RatingProps) {

    const [value, setValue] = useState(0)

  return (
    <div>
      <Rating {...props} setValue={setValue} value={value} />
      {value}
    </div>
  );
}

export default Container;
