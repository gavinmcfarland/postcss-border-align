// Doesn't  support corners when border set to outside. I would have to identify
// corners by checking for values of corner side pairs and checking what their widths
// to calculate value for additional box shadow to cover appearence of corner

// Add check to look if all sides are the same then use only one box shadow

export function boxShadow(border) {
  //Needs to merge all the values into one box-shadow?
  let array = [];
  let inset = "";

  for (let side in border) {
    if (border[side].align === "inside") {
      inset = "inset";
      if (border[side].name === "right" || border[side].name === "bottom") {
        border[side].width = "-" + border[side].width;
      }
    }
    if (border[side].align === "outside") {
      if (border[side].name === "left" || border[side].name === "top") {
        border[side].width = "-" + border[side].width;
      }

    }


    switch (side) {
      case "top":
        array.push(
          `${inset} 0 ${border[side].width} 0 0 ${border[side].color}`.trim()
        );
        break;
      case "left":
        array.push(
          `${inset} ${border[side].width} 0 0 0 ${border[side].color}`.trim()
        );
        break;
      case "right":
        array.push(
          `${inset} ${border[side].width} 0 0 0 ${border[side].color}`.trim()
        );
        break;
      case "bottom":
        array.push(
          `${inset} 0 ${border[side].width} 0 0 ${border[side].color}`.trim()
        );
        break;
      default:
        console.log("hello");
    }
  }
  return array.join(", ");
}
