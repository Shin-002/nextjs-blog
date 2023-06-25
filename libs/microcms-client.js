import {createClient} from 'microcms-js-sdk'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const API_KEY = process.env.MICRO_CMS_API_KEY
const SERVICE_DOMAIN = process.env.MICRO_CMS_DOMAIN
const ENDPOINT = process.env.MICRO_CMS_ENDPOINT

export const getEnv = () => {
  if (!API_KEY || !SERVICE_DOMAIN  || !ENDPOINT) {
    throw new Error(`環境変数が設定されていません。API_KEY:${API_KEY}, SERVICE_DOMAIN: ${SERVICE_DOMAIN}, ENDPOINT: ${ENDPOINT}`)
  }

  return {
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
    endpoint: ENDPOINT
  }
}

export const client = createClient({
  serviceDomain: getEnv().serviceDomain,
  apiKey: getEnv().apiKey
})
