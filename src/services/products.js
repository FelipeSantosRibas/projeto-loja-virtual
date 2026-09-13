const API_URL = import.meta.env.VITE_API_URL

export const getProducts = async (category) => {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  const data = await response.json();

  return data;
};