import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login, set } from '../store/slice/user'

export default function index() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(Login())
    dispatch(set())
  }, [])
  
  return (
    <>
      {JSON.stringify(user)}

    </>
  )
}
