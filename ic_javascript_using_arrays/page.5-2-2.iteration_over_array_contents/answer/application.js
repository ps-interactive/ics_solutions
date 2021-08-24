function isString(value){
  return typeof value == "string";
}

function numStrings(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (isString(list[i])) {
      count++;
    }
  }
  return count;
}
