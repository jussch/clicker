/**
 * Created by Justin on 5/20/2018.
 */

const SHORT_SUFFIX = [
  '',
  'K',
  'M',
  'B',
  'T',
  'Qd',
  'Qt',
  'Sx',
  'Sp',
  'Oc',
  'No',
  'De',
];

const EXPANDED_SUFFIX = [
  '',
  'Thousand',
  'Million',
  'Billion',
  'Trillion',
  'Quadrillion',
  'Quintillion',
  'Sextillion',
  'Septillion',
  'Octilition',
  'Nonillion',
  'Decillion',
];

/**
 * Makes a number look pretty.
 * @param {Number} number
 * @param {Object} options
 * @returns {String}
 */
export default function beautifyNumber(number, options = {}) {
  const {
    expanded = false,
    decimals = 1,
  } = options;

  const digits = Math.floor(Math.log10(number)) + 1;
  const position = Math.floor((digits - 1) / 3);

  // Use 4 so that it still reads in the thousands.
  if (number <= 0 || digits <= 4) return number.toFixed(0);

  const adjustment = 10 ** (position * 3);
  const shortNum = number / adjustment;

  const suffixList = expanded ? EXPANDED_SUFFIX : SHORT_SUFFIX;
  const text = `${expanded ? ' ' : ''}${suffixList[position]}`;

  return `${shortNum.toFixed(decimals)}${text}`;
}
