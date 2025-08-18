import axios from "axios";

const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const Accestoken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const axiosInstance = axios.create({
  baseURL: `https://${domain}.myshopify.com/api/2025-07/graphql.json`,

  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": Accestoken,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("shopify API error:", error.message);
  },
);

export default axiosInstance;
