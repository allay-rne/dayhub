export const groupForecastByDay = (list) => {
  return list.reduce((acc, item) => {
    const day = item.dt_txt.split(' ')[0]

    if (!acc[day]) {
      acc[day] = []
    }

    acc[day].push(item)
    return acc
  }, {})
}