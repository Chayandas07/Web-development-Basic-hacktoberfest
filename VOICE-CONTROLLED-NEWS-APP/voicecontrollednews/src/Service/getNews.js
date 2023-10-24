import axios from 'axios';
export function getNews(category='General') {
  
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=014b35cf2f264a129261cb580be71916`)
  
}
