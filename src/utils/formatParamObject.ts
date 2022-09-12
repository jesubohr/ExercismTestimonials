import type { ParamOptions } from '../types/Testimonials';

export function formatParamObject(options: ParamOptions) {
  return Object
    .entries(options)
    .filter(([_, value]) => value !== '' && value !== 'all')
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}
