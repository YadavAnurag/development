import React, {useEffect, useState} from 'react'


const ItemDetail = (match)=>{
  useEffect(()=>{
    fetchItem()
  },[])
  const [item, setItem] = useState({
    images: {}
  })
  const fetchItem = async ()=>{
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`)
    const item = await data.json()
    setItem(item)
    
  }
  return(
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} alt={item.name}/>
    </div>
  )
}

export default ItemDetail