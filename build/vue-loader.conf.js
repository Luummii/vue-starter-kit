import { cssLoaders } from './utils'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  loaders: cssLoaders({
    sourceMap: isProduction,
    extract: isProduction
  })
}
