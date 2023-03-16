import prisma from '@/plugin/prisma'

type Props = {
  data: string
}
export default async function GetUsername({ data }: Props) {
  const user = await prisma.user.findMany({ where: { user_name: { equals: data}}})
  if (user && user.length !== 0) {
    return true
  } else {
    return false
  }
}