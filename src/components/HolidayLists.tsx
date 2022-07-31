import React, { useEffect, useState } from 'react'
import { GET_HOLIDAYS_QUERY } from '../constants/API_Endpoints'
import { useQuery } from '@apollo/client'
import { Spin  } from 'antd'
import HolidayCard from './HolidayCard'
import { Holiday } from '../constants/HolidayInterfaces'
import InfiniteScroll from 'react-infinite-scroll-component';



function HolidayLists() {
    const [packages, setPackages]: any = useState([])
    const [limit, setLimit] = useState({skip: 0, limit: 4})
    const [hasMore, sethasMore] = useState(true)
    const { data } = useQuery(GET_HOLIDAYS_QUERY, {variables: {skip: limit.skip, limit: limit.limit}});

    useEffect(() => {
        if(!data){
            return;
        }
        let newPackages: any = data.getPackages.result.packages;
            
        if(newPackages && newPackages.length > 0) { 
            setPackages((p: any) => [...p, ...newPackages])
        } else {
            sethasMore(false)
        }
        
    }, [data])

    const fetchOnScroll = () => {  
        setLimit({
            ...limit,
            skip: limit.skip + 4
        })
    }

    return (
        <div>
            <p className="title is-4" style={{color: 'navy'}}> {packages.length} Available Holidays </p>
            <InfiniteScroll
                dataLength={packages.length}
                next={fetchOnScroll}
                hasMore={hasMore}
                loader={<div className="columns"><div className="column"><Spin /></div></div>}
            >
                {packages && packages.map((p: Holiday, idx: number) => <div key={idx}> <HolidayCard {...p} /> <br /> </div>)}
                
            </InfiniteScroll>
        </div>
    )
}

export default HolidayLists
