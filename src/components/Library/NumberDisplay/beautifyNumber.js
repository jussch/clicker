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

export default function beautifyNumber(number, options = {}) {
  const {
    expanded = false,
    decimals = 1,
  } = options;

  const position = Math.floor(Math.log10(number) / 3);
  if (position === 0) return number;

  const adjustment = 10 ** (position * 3);
  const shortNum = number / adjustment;

  const suffixList = expanded ? EXPANDED_SUFFIX : SHORT_SUFFIX;
  const text = `${expanded ? ' ' : ''}${suffixList[position]}`;

  return `${shortNum.toFixed(decimals)}${text}`;
}
