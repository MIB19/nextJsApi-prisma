// import { sha512 } from 'js-sha512'
const sha512 = require('js-sha512').sha512;

type Props = {
  data: string
}

export default function hash512({ data }: Props): string {
  const psw = sha512(data)
  return psw.substring(0, psw.length - 1)
}