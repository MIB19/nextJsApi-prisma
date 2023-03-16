import GetUser from '@/function/GetUser'
import GetUsername from '@/function/GetUsername'
import hash512 from '@/function/hash512'
import SetResponse from '@/function/SetResponse'
import prisma from '@/plugin/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { user_name, pwd, email } = req.body
    if (user_name && pwd && email) {
      const checkEmail = await GetUser({ data: email })
      const checkUsername = await GetUsername({ data: user_name })
      if (checkEmail) {
        res.status(400).json(SetResponse({ suc: false, mes: 'Email Telah Digunakan!' }))
      } else if (!checkEmail && checkUsername) {
        res.status(400).json(SetResponse({ suc: false, mes: 'Username Telah Digunakan!' }))
      } else {
        try {
          await prisma.user.create({
            data: {
              user_name: user_name,
              pwd: hash512({ data: pwd }),
              email: email
            }
          })
          res.status(200).json(SetResponse({ suc: true, mes: 'data berhasil dibuat!' }))
        } catch (err) {
          res.status(400).json(SetResponse({ suc: false, mes: err }))
        }
      }
    } else {
      res.status(400).json(SetResponse({ suc: false, mes: 'data kurang lengkap!' }))
    }
  } else {
    res.status(404).json({  })
  }
}
