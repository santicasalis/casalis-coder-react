import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { getFetch } from "../../array/getFetch"
import "./itemListContainer.css"
 

export const ItemListContainer = (  ) => {      
    const [vehiculos, setVehiculos] = useState([])
    

    const {id} = useParams() 

    useEffect(() => {
        if (id) {
            getFetch()  
            .then(vehiculos=> setVehiculos(vehiculos.filter((vehiculo) => vehiculo.categoria === id)))
            .catch((err)=> console.log(err))
           
                                      
        } else {
            getFetch()  
            .then(vehiculo=> setVehiculos(vehiculo))
            .catch((err)=> console.log(err))
           
                            
        }
                  }, [id])

    return (
        <div>
           
            { 
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList vehiculos={vehiculos} /> 
                </div>
            }

          
        </div>

    )
}

