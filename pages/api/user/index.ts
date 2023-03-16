import GetUser from '@/function/GetUser'
import prisma from '@/plugin/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const check = await GetUser({ data: req.body.email })
  if (check) {
    res.status(200).json({ success: true, data: true })
  } else {
    res.status(404).json({ success: false, message: 'email not found!' })
  }
}