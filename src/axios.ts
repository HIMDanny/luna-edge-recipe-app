import axios from 'axios';

export const fetchRecipes = axios.create({
  baseURL: 'https://api.edamam.com/api/recipes/v2',
  params: {
    type: 'public',
    app_id: import.meta.env.VITE_APP_ID,
    app_key: import.meta.env.VITE_API_KEY,
  },
});
