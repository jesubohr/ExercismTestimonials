const relativeTime = new Intl.RelativeTimeFormat('en', {
  style: 'long',
  numeric: 'auto',
})

const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000
const MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000
const DAY_IN_MS = 24 * 60 * 60 * 1000
const HOUR_IN_MS = 60 * 60 * 1000
const MINUTE_IN_MS = 60 * 1000
const SECOND_IN_MS = 1000

export function formatRelativeTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  
  let diff = date.getTime() - now.getTime()
  let unit: Intl.RelativeTimeFormatUnit

  const absDiff = Math.abs(diff)
  if (absDiff > YEAR_IN_MS) {
    diff = Math.trunc(diff / YEAR_IN_MS)
    unit = 'year'
  } else if (absDiff > MONTH_IN_MS) {
    diff = Math.trunc(diff / MONTH_IN_MS)
    unit = 'month'
  } else if (absDiff > WEEK_IN_MS) {
    diff = Math.trunc(diff / WEEK_IN_MS)
    unit = 'week'
  } else if (absDiff > DAY_IN_MS) {
    diff = Math.trunc(diff / DAY_IN_MS)
    unit = 'day'
  } else if (absDiff > HOUR_IN_MS) {
    diff = Math.trunc(diff / HOUR_IN_MS)
    unit = 'hour'
  } else if (absDiff > MINUTE_IN_MS) {
    diff = Math.trunc(diff / MINUTE_IN_MS)
    unit = 'minute'
  } else {
    diff = Math.trunc(diff / SECOND_IN_MS)
    unit = 'second'
  }

  return relativeTime.format(diff, unit)
}
