import Home from '@/components/Home-mobile/Home'
import SingleFileUploader from '@/components/uploader'
import { Welcome} from '@/interfaces'
import xml2js from 'xml-js'
import res from '@/app/data.json'
import { FileUpload } from 'primereact/fileupload';

async function getData() {
 /* import XMLData from './data.xml';

axios.get(XMLData, {
   "Content-Type": "application/xml; charset=utf-8"
})
.then((response) => {
 //  console.log('Your xml file as string', response.data);
  return xml2js(response).json()
});*/
  const res = await fetch ('https://www.dropbox.com/scl/fi/woy1suuov83tp74hgahby/1.paper?rlkey=f2m8rnoyown60xb4y2lb7p43y&dl=1')
 
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
