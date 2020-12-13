export const checkBudgetInfo = (movie) => {
  let mockData = {}
  const millions = Math.random() * 100
  if (movie.budget === 0 && movie.revenue === 0) {
    mockData.budget = +(`${millions.toFixed()}000000`)
    mockData.revenue = +((Math.random() * 1.2) * mockData.budget).toFixed()
  } else if (movie.budget === 0) {
    mockData.budget = +((1 + Math.random())*movie.revenue).toFixed()
  } else if (movie.revenue === 0) {
    mockData.revenue = +((Math.random() * 1.2) * movie.budget).toFixed()
  }
  return {...movie, ...mockData }
}