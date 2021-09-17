import React, { useEffect, useState } from 'react'
import { GET_HOLIDAYS_QUERY } from '../constants/API_Endpoints'
import { useQuery } from '@apollo/client'


function HolidayLists() {
    const [packages, setPackages] = useState([])
    const { data } = useQuery(GET_HOLIDAYS_QUERY);
    // const { loading, error, data } = useQuery(GET_HOLIDAYS_QUERY);

    useEffect(() => {
        if(data){
            console.log(data.getPackages.result.packages);
            
            setPackages(data.getPackages.result.packages) 
        }
    }, [data])

    return (
        <div>
            {packages && packages.map((p: any) => <h3 key={p.uid}>{p.title}</h3>)}
        </div>
    )
}

export default HolidayLists
