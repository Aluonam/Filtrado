1. En el useState se guarda un objeto (en lugar de un array como hacia antes)
```javascript
 const [dataAPI, setDataAPI] = useState({originalData:[], showData:[]})
```
2. Así mismo en la llamada hauyq eu especificar dentro del set las partes del objeto.
```javascript
.then(response => setDataAPI({originalData:response.data, showData:response.data}))ç
```
3. Al recorrer debemos especificar la parte del objeto que voy a recorrer con el map 
```javascript
data.originalData
  const showProducts = dataAPI.showData.map((element) =>
        <CardProduct title={element.title} imgUrl={element.image}></CardProduct>
    )
```
4. Por tanto al hajcer el filtrado se especifica la parte del objeto también
```javascript
const handlefilterMujer = ()=>{
        const arrayWomen = dataAPI.originalData.filter((e)=>e.category === "women's clothing")
        setDataAPI({...dataAPI,showData:arrayWomen})
    }
```
5. Se especifican los datos que se cogen y como se quedan los datosMostrados (al usar filter crea un array con los datos que le especificamos). Si qiro coger solo la ropa de mujer el fiilter me devuelve un array con solo la ropa de mujer por lo que setDataAPI() tendrá dentro ...dataApi y además showData:arrayWomen


En el boton de recuperar todos los datos tenemos que especificar que sigue siendo un OBJETO {} y dentro mantiene los datos originales de data api {...dataAPI} y además, especificamos lo que tiene que valer showData
```javascript
 <button onClick={()=>setDataAPI({...dataAPI, showData:dataAPI.originalData})}>todos</button>

 //lo mismo pero mas largo:
<button onClick={()=>setDataAPI({originalData:dataAPI.originalData, showData:dataAPI.originalData})}>todos</button>
```

```javascript
    // dataAPI = {originalData:[],showData:[]}
    // llamada API -->  dataAPI = {originalData:[datos de la llamada],showData:[ datos de la llamada]}
    // filtro --> dataAPI = {originalData:[datos de la llamada],showData:[ nuevos datos filtrados]}
    // setDataAPI({...dataAPI, showData:dataAPI.originalData})
    // dataAPI = {...dataAPI}
    // dataAPI = {originalData:[datos de la llamada],showData:[ nuevos datos filtrados]}
    // dataAPI = {...dataAPI,showData:[nuevo valor]}
    // dataAPI = {originalData:[datos de la llamada],showData:[ nuevo valor]}
    ```