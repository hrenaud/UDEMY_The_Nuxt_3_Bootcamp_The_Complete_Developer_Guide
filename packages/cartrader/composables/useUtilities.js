export const useUtilities = () => {
  // a function that return capitalized string
  const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return {
    toTitleCase,
  };
};
