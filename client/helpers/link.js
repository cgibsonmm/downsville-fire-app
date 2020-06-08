export const parseLink = (link) => {
  return link !== "Home"
    ? link.split("")[0].toLowerCase() + link.split("").splice(1).join("")
    : "";
};
