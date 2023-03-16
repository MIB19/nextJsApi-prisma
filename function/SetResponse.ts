
type Props = {
  suc: boolean,
  mes: any
}
export default function SetResponse({ suc, mes }: Props) {
  return {
    success: suc,
    message: mes
  }
}