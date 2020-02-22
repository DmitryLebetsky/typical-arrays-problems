exports.min = function min (array) {
  if (array && array.length > 0) {
    let min = array[0];
    for (let i=0; i < array.length; i++) {
      if (min > array[i]){
        min = array[i];
      }
    }
    return min;
  } else return 0;
};

exports.max = function max (array) {
  if (array && array.length > 0) {
    let max = array[0];
    for (let i=0; i < array.length; i++) {
      if (max < array[i]){
        max = array[i];
      }
    }
    return max;
  } else return 0;
};

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
      avg = avg + array[i];
    }
    let result = avg / (array.length);
    return result;
  } else return 0;
};
