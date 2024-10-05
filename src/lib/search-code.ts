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

    // tempo para buscar o dado
    new Promise(resolve => setTimeout(resolve, 3000))

    const productName = await response.data.description

    console.log(productName)

    return productName
  } catch (error) {
    console.error('Erro ao buscar os dados do produto: ', error)

    return 'Produto não encontrado'
  }
}
