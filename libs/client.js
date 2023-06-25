import {createClient} from 'microcms-js-sdk'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const client = createClient({
  serviceDomain: 'yuyu-blog',
  apiKey: process.env.API_KEY
})
