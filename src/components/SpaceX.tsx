import {  useEffect, useState } from "react"
import { getSpaceInfo } from "../services/space-x/service"



export const SpaceX  = () => {
const [info, setInfo] = useState<any>(undefined)

useEffect(()=>{
  getData()
},[])

const getData=async()=>{
  const response = await getSpaceInfo()
  console.log(response)
  setInfo(response)
}
  return (
  // <>
  // <h3>Company info:</h3>
  // <h1>Boss: {}</h1>
  // {}
 

  
  <>
  
  <h1>Rockets:</h1>
  <div className="container">
    {!info ? 'Cargando' :
    info.map((info:any,index:any)=>{
      return(
        <div className="text-center">
          <img src={info.flickr_images[0]} alt="" />
          <h4>{info.description}</h4>
        </div>
      )
    })}
  </div>
  </>
  )
}
