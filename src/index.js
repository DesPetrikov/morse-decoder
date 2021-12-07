const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '**********': ' ',
};

function decode(expr) {
  const exprArr = expr.match(/\S{10}/g).map((el) =>
    el
      .replace(/^0*/, '')
      .match(/([0|1]{2})|\*{10}/g)
      .map((element) => {
        if (element === '10') {
          element = '.';
        } else if (element === '11') {
          element = '-';
        }
        return element;
      })
      .join('')
  );
  return exprArr.map((el) => MORSE_TABLE[el]).join('');
}

module.exports = {
  decode,
};
