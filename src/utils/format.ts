export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ko-KR').format(date)
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(amount)
}
