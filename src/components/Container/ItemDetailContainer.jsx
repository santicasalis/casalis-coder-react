import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Load } from '../Spinner/Spinner'

import "./itemDetailContainer.css"


export const ItemDetailContainer = () => {
    const [car, setCar] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()



    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "vehiculos", detalleId)
        getDoc(dbQuery)
            .then(resp => setCar({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 

    }, [])
    return (
  <div>
        {
           
        loading? 
        <Load/>
        :
        <div className='espacio'>
            <ItemDetail car={car} />

        </div>
    }
    
    </div>
    )
}

