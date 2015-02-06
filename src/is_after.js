/**
 * Is first date is after second one?
 * @param {date|string} dirtyDateToCompare
 * @param {date|string} dirtyDate
 * @returns {boolean}
 *
 * @example is 10 July 1989 is before 11 February 1987
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
 * //=> true
 */
var isAfter = function(dirtyDateToCompare, dirtyDate) {
  var dateToCompare = new Date(dirtyDateToCompare);
  var date = new Date(dirtyDate);
  return dateToCompare.getTime() > date.getTime();
};

module.exports = isAfter;
