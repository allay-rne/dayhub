export const getHumidityLabel = (humidity) => {
  if (humidity >= 100) return "It's basically underwater out there 🌊"
  if (humidity >= 51) return "Definitely take an umbrella!"
  if (humidity >= 26) return "Maybe grab an umbrella, just in case"
  if (humidity >= 1) return "No umbrella needed, enjoy the sun!"
  return "Desert mode activated 🌵"
}