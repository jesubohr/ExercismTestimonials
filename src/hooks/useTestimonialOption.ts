import { useContext } from 'react'
import { OptionsContext } from '@/context/TestimonialContext'

export function useOptions() {
  return useContext(OptionsContext)
}
