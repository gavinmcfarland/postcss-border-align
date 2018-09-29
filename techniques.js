export function boxShadow(border) {
  //Needs to merge all the values into one box-shadow?
  let array = [];
  let inset = "";

  for (let side in border) {
    if (border[side].align === "inside") {
      inset = "inset";
    }

    switch (side) {
      case "top":
        array.push(
          `${inset} 0 ${border[side].width} 0 0 ${border[side].color}`.trim()
        );
        break;
      case "right":
        array.push(
          `${inset} -${border[side].width} 0 0 0 ${border[side].color}`.trim()
        );
        break;
      case "bottom":
        array.push(
          `${inset} -${border[side].width} 0 0 0 ${border[side].color}`.trim()
        );
        break;
      case "left":
        array.push(
          `${inset} 0 -${border[side].width} 0 0 ${border[side].color}`.trim()
        );
        break;
      default:
        console.log("hello");
    }
  }
  return array.join(", ");
}
