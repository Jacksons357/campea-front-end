import { env } from '@/env'
import axios from 'axios'

const headers = {
  'X-Cosmos-Token': 'HVvlQOY8T7MXvd8cCrOKjg',
  'Content-Type': 'application/json',
  // 'User-Agent': 'Cosmos-API-Request',
}

export async function searchCode(value: string) {
  try {
    const response = await axios.get(`${env.SEARCH_CODE}/${value}`, {
      headers,
    })

    await new Promise(resolve => setTimeout(resolve, 2000))

    let productName = await response.data.description

    productName = productName.trim().replace(/\s+/g, ' ')

    const words = productName.split(' ')

    const firstTwoWords = words.slice(0, 3).join(' ')

    return firstTwoWords
  } catch (error) {
    console.error('Erro ao buscar os dados do produto: ', error)

    return 'Produto não encontrado'
  }
}
