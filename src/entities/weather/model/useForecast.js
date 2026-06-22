import {useEffect, useMemo, useState} from "react";
import {forecastApi} from "@/entities/weather/api/forecastApi.js";
import {groupForecastByDay} from "@/entities/weather/lib/groupForecastByDay.js";

const useForecast = () => {

  const [city, setCity] = useState('Novosibirsk')
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchForecast = async (cityName = city) => {
    try {
      setIsLoading(true)
      const data = await forecastApi(cityName)
      setWeather(data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const weatherByDay = useMemo(() =>
      groupForecastByDay(weather?.list ?? []),
    [weather])

  useEffect(() => {
    fetchForecast()
  }, []);

  return {
    isLoading,
    error,
    weatherByDay,
  }
}

export default useForecast