import prisma from '@/plugin/prisma'

type Props = {
  data: string
}
export default async function GetUser({ data }: Props) {
  const user = await prisma.user.findMany({ where: { email: { equals: data }}})
  if (user && user.length !== 0) {
    return true
  } else {
    return false
  }
}