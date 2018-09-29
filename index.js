// *************************
// Methods
//
// @box-shadow - only works with solid
// @pseudo elements - only works with inside and means before after can't be used
// @padding - only works with inside and means padding can't be overiden
// @margin - only works with outside and means margin can't be overiden

import postcss from "postcss";
// import valueParser from 'postcss-value-parser';
import { getBorderProperties } from "./get-border-properties";
import { boxShadow } from "./techniques";

// function boxShadowMethod(properties) {
// 	var all = `${inset} 0 0 0 ${borderWidth} ${color}`
// 	var top = `${inset} 0 ${borderWidth} 0 0 ${color}`
// 	var right = `${inset} -${borderWidth} 0 0 0 ${color}`
// 	var bottom = `${inset} 0 -${borderWidth} 0 0 ${color}`
// 	var left = `${inset} ${borderWidth} 0 0 0 ${color}`
// }

export default postcss.plugin("postcss-border-align", () => {
  return root => {
    // Walk through each rule
    root.walkRules(rule => {
      // Creat properties of border object
      const border = getBorderProperties(rule);

      // Create string for new border
      let newBorder = boxShadow(border);

      // Add new border as prop
      rule.append({ prop: "box-shadow", value: newBorder });
    });
  };
});
