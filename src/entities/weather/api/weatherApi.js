
const API_KEY = import.meta.env.VITE_API_WEATHER

export const weatherApi = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
}