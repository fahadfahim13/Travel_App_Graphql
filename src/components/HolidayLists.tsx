import React, { useEffect, useState } from 'react'
import { GET_HOLIDAYS_QUERY } from '../constants/API_Endpoints'
import { useQuery } from '@apollo/client'
import { Button } from 'antd'
import HolidayCard from './HolidayCard'


function HolidayLists() {
    const [packages, setPackages]: any = useState([])
    const [limit, setLimit] = useState({skip: 0, limit: 1})
    const { data } = useQuery(GET_HOLIDAYS_QUERY(limit.skip, limit.limit));
    const increment = 1
    // const { loading, error, data } = useQuery(GET_HOLIDAYS_QUERY);

    useEffect(() => {
        if(data){
            console.log(data.getPackages);
            let newPackages: any = data.getPackages.result.packages;
            
            setPackages((p:any) => [...p, ...newPackages])
        }
    }, [data])

    return (
        <div>
            {packages && packages.map((p: any) => <HolidayCard />)}
            <Button onClick={() => setLimit({
                ...limit,
                skip: limit.skip + increment
            })}>Get More</Button>
        </div>
    )
}

export default HolidayLists
