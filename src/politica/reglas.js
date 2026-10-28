const CARACTERES_ESPECIALES_ARRAY = "!#$%&=".split("");
const NUMEROS_ARRAY = ['0','1','2','3','4','5','6','7','8','9'];

const reglas = [
  {
    name: "longitud",
    func: (pwd) => pwd.length >= 8
  },
  {
    name: "Espacios en blanco",
    func: (pwd) => pwd.includes(" "),
  },
  {
    name: "Caracteres Especiales",
    func: (pwd) => CARACTERES_ESPECIALES_ARRAY.some( c => pwd.includes(c))
  },
  {
    name: "Al menos un numero",
    func: (pwd) => NUMEROS_ARRAY.some( n => pwd.includes(n))
  },
  {
    name: "Ultimo caracter no especial",
    func: (pwd) => !CARACTERES_ESPECIALES_ARRAY.some( c => pwd[pwd.length-1] == c),
  },
]

module.exports = reglas;