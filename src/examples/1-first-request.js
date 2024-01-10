import axios from 'axios'
import { useEffect } from 'react'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  // using async - await
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios(url)
  //       const { data } = response
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // using Promise
  useEffect(() => {
    axios
      .get(url)
      .then(res => console.log(res.data))
      .catch(error => console.log(error.message))
  }, [])
  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
