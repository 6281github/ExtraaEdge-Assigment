import Image from "./Components/Image";
import { useState, useEffect } from "react";
import '../style/App.css'



export default function App() {
  const [details, setDetails] = useState([])
  

  let tags = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let fixes = tags.map(item => {
    return 'abcd' + item;
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(result => { setDetails(result) })
  }, [])

  console.log(details[0])
  
  // const heartStyle ={
  //   color: {color}
  // }

  return <>

    <div className="showCards">
      {
        details.map((item, index) => {
          console.log(item.name, item.email, item.phone, item.website)
          let url = 'https://avatars.dicebear.com/v2/avataaars/' + fixes[index] + '.svg?options[mood][]=happy';
          return <>

            <Image key={index} url={url} details={item} />
           


          </>
        })
      }

    </div>


  </>



}
