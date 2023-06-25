import {createClient} from 'microcms-js-sdk'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_ENDPOINT,
  apiKey: process.env.MICRO_CMS_API_KEY
})
