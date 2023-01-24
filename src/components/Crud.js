
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { todosItems } from "./funcion";
import '../assets/css/crud.css' 
import logo from '../assets/imgs/logo-enerbit.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from "styled-components";
import { useHistory } from 'react-router';


 
const Crud = () =>{
    const [ items, setItems ] = useState(null)
    const [busqueda, setBusqueda]=useState("")
    const [post, setPost] = useState(null);
    const [ DataUpdate, setDataUpdate ] = useState(null)


    useEffect(()=>{
        todosItems(setItems)
    },[])
    const handleChange=e=>{
        setBusqueda(e.target.value);
        console.log("Busqueda: "+e.target.value);
    }
        const onDelete =(id)=>{
         axios.delete(`https://ops.enerbit.dev/learning/api/v1/meters/${id}`).then(() => {
            window.location.reload(false);
        })
        
        };
    const getData = () => {
        axios.get(`https://ops.enerbit.dev/learning/api/v1/meters`)
            .then((getData) => {
                 setItems(getData.item);
             })
    } 
    
        const onUpdate =async(id)=>{

            


            let dataUpdate =axios.get(`https://ops.enerbit.dev/learning/api/v1/meters/${id}`).then(function(result){
                let dataFinal = result.data
                setDataUpdate(dataFinal);
                modalPost.showModal()   
                let inputSerial = document.getElementById('serial').value = DataUpdate.serial   
                let inputConnection_type = document.getElementById('connection_type').value = DataUpdate.connection_type
                let inputStorage_system = document.getElementById('storage_system').value= DataUpdate.storage_system
                let inputCondition = document.getElementById('condition').value= DataUpdate.condition
                let inputOwner = document.getElementById('owner').value= DataUpdate.owner
                let inputLocation = document.getElementById('location').value= DataUpdate.location
                let inputManufacturer = document.getElementById('manufacturer').value= DataUpdate.manufacturer
                let inputPurchase= document.getElementById('purchase').value= DataUpdate.purchase
                let inputI_max = document.getElementById('i_max').value= DataUpdate.i_max
                let inputI_b = document.getElementById('i_b').value= DataUpdate.i_b
                let inputI_n = document.getElementById('i_n').value= DataUpdate.i_n
                let inputSeals = document.getElementById('seals').value = DataUpdate.seals
        let inputCreated_at= document.getElementById('created_at').value = DataUpdate.created_at
                console.log(DataUpdate)

            })
            
        }
    
  

    const postElement=()=>{
        let inputSerial = document.getElementById('serial').value
        let inputConnection_type = document.getElementById('connection_type').value
        let inputStorage_system = document.getElementById('storage_system').value
        let inputCondition = document.getElementById('condition').value
        let inputOwner = document.getElementById('owner').value
        let inputLocation = document.getElementById('location').value
        let inputManufacturer = document.getElementById('manufacturer').value
        let inputPurchase= document.getElementById('purchase').value
        let inputI_max = document.getElementById('i_max').value
        let inputI_b = document.getElementById('i_b').value
        let inputI_n = document.getElementById('i_n').value
        let inputSeals = document.getElementById('seals').value
        let inputCreated_at= document.getElementById('created_at').value
        


        axios.post(`https://ops.enerbit.dev/learning/api/v1/meters`,{
            serial: inputSerial,
            connection_type: inputConnection_type,
            storage_system: inputStorage_system,
            condition: inputCondition,
            owner: inputOwner,
            location: inputLocation,
            manufacturer: inputManufacturer,
            purchase: inputPurchase,
            i_max: inputI_max,
            i_b: inputI_b,
            i_n: inputI_n,
            seals: inputSeals,
            id: 1,
            created_at: inputCreated_at,
            updated_at: null
        }).then(()=>{    
            window.location.reload(false);
        })

      }
   
 
    const btnOpenModal =
    document.querySelector("#abrirModal");
    const btnCloseModal =  
    document.querySelector("#closeModal");
    const modalPost = document.querySelector("#modalPost");
    const openW=()=>{
        modalPost.showModal()
    }
    const CloseW=()=>{
        modalPost.close()

    }
    let tittle = 'Agregar'
    function modalComponent(){
        return(
            <dialog id="modalPost">
            <h2>{tittle}</h2>
            <label  for="serial">serial</label>
            <input type="number" id="serial" />
            <br></br>
            <label  for="connection_type">connection_type</label>
            <select id="connection_type">
                <option value="directa">directa</option>
                <option value="semi-directa">semi-directa</option>
                <option value="indirecta">indirecta</option>
            </select> 
            <br></br>
            <label for="storage_system">storage_system</label>
            <select id="storage_system">
                <option value="interno">interno</option>
                <option value="externo">externo</option>
        
            </select>    
             
            <br></br>
            <label for="condition">condition</label>
            <select id="condition">
                    <option value="nuevo">nuevo</option>
                    <option value="usado">usado</option>
            </select>    
            <br></br>
            <label for="owner">owner</label>
            <select type="text" id="owner">
                <option value="RF">RF</option>
                <option value="OR">OR</option>
        
            </select>     
            <br></br>
            <label for="location">location</label>
            <input type="text" id="location"/> 
            <br></br>
            <label for="manufacturer">manufacturer</label>
            <input type="text" id="manufacturer"/> 
            <br></br>
            <label for="purchase">purchase</label>
            <input type="text" id="purchase"/> 
            <br></br>
            <label for="i_max">i_max</label>
            <input type="number" id="i_max"/> 
            <br></br>
            <label for="i_b">i_b</label>
            <input type="text" id="i_b"/> 
            <br></br>
            <label for="i_n">i_b</label>
            <input type="text" id="i_n"/> 
            <br></br>
            <label for="seals">seals</label>
            <input type="number" id="seals"/> 
            <br></br>
            <label for="created_at">created_at</label>
            <input type="text" id="created_at"/> 
            <button onClick={postElement}>Add Product</button>
        
            <button onClick={CloseW} id="closeModal">cerrar modal</button>
            </dialog>
        
        );
    }


return (  
    <>

        {modalComponent()}

  
   
    <div class="crud">
       
    <div class="inicio">   
    <img src={logo} className="App-logo" alt="logo" />
    <button onClick={openW} class="addProduct" id="abrirModal" >Add Product</button>

    <input type="text" 
    value={busqueda}
    className='inputBuscar'
    placeholder="SEARCH"
    onChange={handleChange}></input><label><button >Se</button></label>
    </div>
    <table class="table">
                <thead class="thead-dark">
                    <tr>
                <th scope="col">id</th>
                <th scope="col">serial</th>
                <th scope="col">connection_type</th>
                <th scope="col">storage_system</th>
                <th scope="col">condition</th>
                <th scope="col">owner</th>
                <th scope="col">location</th>
                <th scope="col">manufacturer</th>
                <th scope="col">purchase</th>
                <th scope="col">i_max</th>
                <th scope="col">i_b</th>
                <th scope="col">i_n</th>
                <th scope="col">seals</th>
                <th scope="col">created_at</th>
                <th scope="col">updated_at</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>  
            
    {items != null ? (
        items.filter((item)=> {
            return busqueda === '' ? item : item.storage_system.incluides(busqueda);
        }).map(item => (
            <tr >
                <th id="id" value={item.id}  key={item.id} scope="row">{item.id}</th> 
                <td>{item.serial}</td>
                <td>{item.connection_type}</td>
                <td>{item.storage_system}</td>
                <td>{item.condition}</td> 
                <td>{item.owner}</td>
                <td>{item.location}</td>
                <td>{item.manufacturer}</td>
                <td>{item.purchase}</td>
                <td>{item.i_max}</td>
                <td>{item.i_b}</td>
                <td>{item.i_n}</td>
                <td>{item.seals}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
                <td><button onClick={() => onUpdate(item.id)}>Edit</button></td>
                <td><button onClick={() => onDelete(item.id)}
                >Delete</button></td>
            </tr>
        ) )            

    ): ('no hay items')}
                </tbody>

    </table>
    </div>
    </>
)
  };
export default Crud
