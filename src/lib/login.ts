import { env } from '@/env'
import axios from 'axios'

interface loginUserProps {
  username: string
  password: string
}

export async function loginUser(credentials: loginUserProps) {
  try {
    const response = await axios.post(
      `${env.TRANSFERS_URL}/sessions/login`,
      credentials
    )

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Falha na autenticação')
    }
    throw new Error('Erro na conexão')
  }
}
