import axios from "axios";


const todosItems = async (state) =>{
    const peticion = await axios.get('https://ops.enerbit.dev/learning/api/v1/meters')
    state(peticion.data.items)
 }

 export{

    todosItems
 }