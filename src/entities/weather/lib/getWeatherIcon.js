export const getWeatherIcon = (description) => {
  if (!description) return 'sun'

  const desc = description.toLowerCase()

  if (desc.includes('thunderstorm')) return 'thunderstorm'
  if (desc.includes('snow')) return 'snow'
  if (desc.includes('rain') || desc.includes('drizzle')) return 'cloud'
  if (desc.includes('fog') || desc.includes('mist') || desc.includes('haze')) return 'fog'
  if (desc.includes('cloud')) return 'cloudNoRain'
  if (desc.includes('clear')) return 'sun'

  return 'sun'
}