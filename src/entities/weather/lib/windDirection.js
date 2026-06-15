export const windDirection = (deg = 360) => {
  const result = Math.round(deg / 45) % 8
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

  return directions[result]

}