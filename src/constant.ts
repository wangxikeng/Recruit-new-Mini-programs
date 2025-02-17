export const __PROD__ = import.meta.env.PROD

const productionBaseUrl = 'xxxxxx'
const developmentBaseUrl = 'https://szlab.xyz:8888'

export const __BASE_URL__ = __PROD__ ? productionBaseUrl : developmentBaseUrl

export const __API_TIMEOUT__ = 10000
//http://47.121.198.19:8888