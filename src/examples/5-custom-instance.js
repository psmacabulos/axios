import { useEffect } from 'react'
import axios from 'axios'
import patAuth from '../axios/custom'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance')
  }

  try {
    const resp1 = patAuth.get('react-store-products')
    const resp2 = axios(randomUserUrl)
  } catch (error) {}
  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
