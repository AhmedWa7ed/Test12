import React, { useEffect, useState } from 'react'

export default function Welcme() {

  let [Name , SetName] = useState(0)

  function Anm(){
    SetName(Math.random())
  }
  useEffect(()=>{
    if(Name == 0)
    return
    console.log(" Welcome UseEfect.... ");
  } , [Name])

  return (
    <div>
      Welcome Faction
    { Name }
    <button onClick={Anm}>As</button>
    </div>
  )
}
