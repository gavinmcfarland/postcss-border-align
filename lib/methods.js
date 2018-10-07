// Doesn't  support corners when border set to outside. I would have to identify
// corners by checking for values of corner side pairs and checking what their widths
// to calculate value for additional box shadow to cover appearence of corner

// Add check to look if all sides are the same then use only one box shadow

export function boxShadow(props) {
  const border = props[0];
  const boxShadow = props[1];

  //Needs to merge all the values into one box-shadow?
  let array = [];
  let inset = "";

  function jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }

  let another = jsonCopy(border);
  another["top"].name = "";
  another["right"].name = "";
  another["bottom"].name = "";
  another["left"].name = "";

  if (JSON.stringify(another["top"]) === JSON.stringify(another["right"]) &&
      JSON.stringify(another["top"]) === JSON.stringify(another["bottom"]) &&
      JSON.stringify(another["top"]) === JSON.stringify(another["left"])) {

    if (border["top"].align === "inside") {
      inset = "inset";
    }

    var string = `${inset} 0 0 0 ${border["top"].width} ${border["top"].color}`.trim();


    if (boxShadow) {
      return string.concat(", " + boxShadow);
    }
    else {
      return string;
    }
  }

  else {
    for (let side in border) {

			if (border[side].color && border[side].width) {
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

    }
    if (boxShadow) {
      return array.concat(" " + boxShadow);
    }
    return array.join(", ");

  }
}
