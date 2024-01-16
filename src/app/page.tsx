import Home from '@/components/Home-mobile/Home'
import { Welcome} from '@/interfaces'
import xml2js from 'xml-js'


async function getData() {
  const res = await fetch ('http://localhost:5000/public/data.json')
  //const res = xml2js(xml)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function HomePage() {
  
  const data: Welcome = await getData()
  

  return (
    <>
      <Home YhZav={data.YhZav} />
    </>
  )
}
