import postcss from "postcss";

var colors = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
  "orange",
  "aliceblue",
  "antiquewhite",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "blanchedalmond",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "limegreen",
  "linen",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "oldlace",
  "olivedrab",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "whitesmoke",
  "yellowgreen",
  "rebeccapurple"
];

colors = colors.join("|");

const quantityRegex = /^\d*\.?\d+(?:px|em|rem)?$|^calc\(.*\)$/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\))/g;
colorRegex = colorRegex + "|" + colors;

// var borderRegex = /border-align|border-width|border-style|border-color/g;
// outside 2px solid red;
const schema = [
  {
    name: "align",
    regex: /border-align/g,
    types: /inside|outside|center/g
  },
  {
    name: "width",
    regex: /border-width/g,
    types: quantityRegex
  },
  {
    name: "style",
    regex: /border-style/g,
    types: /dotted|dashed|solid|double|groove|ridge|inset|outset|none|hidden/g
  },
  {
    name: "color",
    regex: /border-color/g,
    types: colorRegex
  }
];

function getBorderProperties(rule) {
  var border = {
    top: {
      name: "top",
      align: null,
      width: null,
      style: null,
      color: null
    },
    right: {
      name: "right",
      align: null,
      width: null,
      style: null,
      color: null
    },
    bottom: {
      name: "bottom",
      align: null,
      width: null,
      style: null,
      color: null
    },
    left: {
      name: "left",
      align: null,
      width: null,
      style: null,
      color: null
    }
  };

  const boxShadow = {};

  var hasBorder = false;

  rule.walkDecls(/^border/, decl => {
    if (decl.value.match(/inside|outside/g)) {
      hasBorder = true;
    }
  });

  if (hasBorder) {
    rule.walkDecls(/^border/, decl => {

      for (let side in border) {
        for (let b = 0; b < schema.length; b++) {
          // Create property names
          let bordersSides = decl.prop === "border-" + border[side].name;
          let bordersSidesProps =
            "border-" + border[side].name + "-" + schema[b].name;
          if (decl.prop === "border" || bordersSides) {
            // Create array from value so that you can check each one
            let array = postcss.list.space(decl.value);

            // Go through each "word" in value
            for (let i = 0; i < array.length; i++) {
              // Cross reference with borders schema
              if (array[i].match(schema[b].types)) {
                let word = array[i].match(schema[b].types)[0];

                if (decl.prop === bordersSides) {
                  border[side][schema[b].name] = word;
                } else {
                  border[side][schema[b].name] = word;
                }
              }
            }
          }
          // Look through individual properties eg border-width
          else if (decl.prop === bordersSidesProps) {
            if (decl.prop === bordersSidesProps) {
              border[side][schema[b].name] = decl.value;
            } else {
              border[side][schema[b].name] = decl.value;
            }
          }
        }
      }

      if (!decl.prop.match(/^border-radius/)) {
        decl.remove();
      }

    });





    rule.walkDecls(/^box-shadow/, decl => {

      boxShadow.value = decl.value;
      decl.remove();
    });
    return [border, boxShadow, hasBorder];
  }
  return [border, boxShadow, hasBorder];
}

export { getBorderProperties };
