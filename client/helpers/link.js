export const parseLink = (link) => {
  if (link === "Home") {
    return "";
  } else if (link.split("").includes(" ")) {
    return link
      .split("")
      .map((char, index, arr) => {
        if (index === 0 || arr[index - 1] === " ") {
          return char.toLowerCase();
        } else {
          return char;
        }
      })
      .join("")
      .split(" ")
      .join("-");
  } else {
    return link.split("")[0].toLowerCase() + link.split("").splice(1).join("");
  }
};
