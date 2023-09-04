//  text related helper functions

/**
 *
 * @param length - length of the string to be returned
 * @returns - dotted string of the given length
 */
export const getDots = (length: number) => {
  return length > 12 ? "..." : "";
};

/**
 *
 * @param text - text to be converted to dotted string
 * @param length - length of the string to be returned
 * @returns - dotted string of the given length
 */
export const getDottedString = (text: string, length: number) => {
  return text.slice(0, length) + getDots(text.length);
};
