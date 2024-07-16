export const __PROD__ = import.meta.env.PROD;

const productionBaseUrl = "xxxxxx";
const developmentBaseUrl = "xxxxxxxx";

export const __BASE_URL__ = __PROD__ ? productionBaseUrl : developmentBaseUrl;

export const __API_TIMEOUT__ = 10000;
