import React from 'react'

const FiltrosBotones = ({dataAPI, setDataAPI}) => {

    const handlefilterHombre = ()=>{
        const arrayMen = dataAPI.originalData.filter((e)=>e.category === "men's clothing")
        setDataAPI({...dataAPI,showData:arrayMen})
    }

    const handlefilterMujer = ()=>{
        const arrayWomen = dataAPI.originalData.filter((e)=>e.category === "women's clothing")
        setDataAPI({...dataAPI,showData:arrayWomen})
    }

    // dataAPI = {originalData:[],showData:[]}
    // llamada API -->  dataAPI = {originalData:[datos de la llamada],showData:[ datos de la llamada]}
    // filtro --> dataAPI = {originalData:[datos de la llamada],showData:[ nuevos datos filtrados]}
    // setDataAPI({...dataAPI, showData:dataAPI.originalData})
    // dataAPI = {...dataAPI}
    // dataAPI = {originalData:[datos de la llamada],showData:[ nuevos datos filtrados]}
    // dataAPI = {...dataAPI,showData:[nuevo valor]}
    // dataAPI = {originalData:[datos de la llamada],showData:[ nuevo valor]}

    
  return (
    <div>
        <button onClick={()=>handlefilterHombre()}>hombre</button>
        <button onClick={()=>handlefilterMujer()}>mujer</button>
        <button onClick={()=>setDataAPI({originalData:dataAPI.originalData, showData:dataAPI.originalData})}>todos</button>
        
    </div>
  )
}

export default FiltrosBotones