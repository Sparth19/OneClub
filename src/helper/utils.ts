const currencySymbols: {[key: string]: string} = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  AUD: 'A$',
  CAD: 'C$',
  CHF: 'CHF',
  CNY: 'CN¥',
  SEK: 'kr',
  NZD: 'NZ$',
  MXN: 'MX$',
  SGD: 'S$',
  HKD: 'HK$',
  NOK: 'kr',
  KRW: '₩',
  INR: '₹',
  RUB: '₽',
  BRL: 'R$',
  ZAR: 'R',
  TRY: '₺',
  AED: 'د.إ',
  SAR: 'ر.س',
};

export const currencyFormat = (value: number = 0, currency: string) => {
  const symbol = currencySymbols[currency] || currency;
  return `${symbol}${value}`;
};

export const removeNumbersAndSymbols = (inputString: string) => {
  const stringWithoutNumbersAndSymbols = inputString.replace(
    /[0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
    '',
  );
  return stringWithoutNumbersAndSymbols.slice(0, 2);
};

export const bgColor = [
  '#D9EBFF',
  '#FDEEEF',
  '#F4F0FD',
  '#E3F5F3',
  '#FEEED0',
  '#FAE7E1',
  '#DFF2FA',
];

export const getRandomColor = () => {
  return bgColor[Math.floor(Math.random() * 7)];
};
