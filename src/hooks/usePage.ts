import { useDispatch } from 'react-redux'

export const usePage = () => {
  const dispatch = useDispatch()

  return {
    dispatch
  }
}