import {useEffect, useMemo, useState} from "react";
import {weatherApi} from "@/entities/weather/api/weatherApi.js";

const useWeather = () => {

  const [city, setCity] = useState('Novosibirsk')
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchWeather = async (cityName = city) => {
    try {
      setIsLoading(true)
      const data = await weatherApi(cityName)
      setWeather(data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const temp = useMemo(() =>
    Math.round(weather?.main?.temp),
    [weather])

  const humidity = useMemo(() =>
    weather?.main?.humidity,
  [weather])

  const feels = useMemo(() =>
      Math.round(weather?.main?.feels_like),
    [weather])

  const windSpeed = useMemo(() =>
      Math.round(weather?.wind?.speed),
    [weather])

  const weatherDesc = useMemo(() =>
    weather?.weather[0]?.description,
    [weather])

  const weatherName = useMemo(() =>
      weather?.name,
    [weather])


  useEffect(() => {
    fetchWeather()
  }, []);

  return{
    weather,
    city,
    isLoading,
    error,
    temp,
    humidity,
    feels,
    windSpeed,
    weatherDesc,
    weatherName,
    fetchWeather,
    setCity,
  }
}

export default useWeather