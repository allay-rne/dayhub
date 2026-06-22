export const getDayTemps = (item) => {
  const tempMax = Math.max(...item.map(i => i?.main?.temp_max))
  const tempMin = Math.min(...item.map(i => i?.main?.temp_min))

  return {
    tempMax,
    tempMin,
  }
}