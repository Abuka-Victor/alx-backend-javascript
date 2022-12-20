export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.findIndex((stringVal) => stringVal === value);
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + value;
    // eslint-enable-next-line no-param-reassign
  }

  return array;
}
