function produceDrivingRange (blockRange) {
  return function (start, finish) {
    let distance = Math.abs(parseInt(start)-parseInt(finish))
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
    return `within range by ${blockRange - distance}`}
  }
}

function produceTipCalculator (decimal) {
  return function (bill) {
    return bill * decimal
  }
}
