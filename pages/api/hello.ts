// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/plugin/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.findMany()
  res.status(200).json(user)
}
