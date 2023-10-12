import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardProduct from '../CardProduct/CardProduct'
import StyleCSS from '@/components/DataWithFilterSC/DataWithFilterSC.module.css'
import FiltrosBotones from '../FiltrosBotones/FiltrosBotones'


const DataWithFilterSC = () => {


    const [dataAPI, setDataAPI] = useState({originalData:[], showData:[]})

    useEffect(() => {
        const url = `https://fakestoreapi.com/products`;
        axios.get(url)
            .then(response => setDataAPI({originalData:response.data, showData:response.data}))
            .catch(error => console.log("error detected", error))

    }, [])

    const showProducts = dataAPI.showData.map((element) =>
        <CardProduct title={element.title} imgUrl={element.image}></CardProduct>
    )




    return (
        <>
        <FiltrosBotones dataAPI={dataAPI} setDataAPI={setDataAPI}/>
        <div className={StyleCSS.productsContainer}>
            
            {showProducts}
        </div>
</>
    )
}

export default DataWithFilterSC