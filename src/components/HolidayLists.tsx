import React, { useEffect, useState } from 'react'
import { GET_HOLIDAYS_QUERY } from '../constants/API_Endpoints'
import { useQuery } from '@apollo/client'
import { Spin  } from 'antd'
import HolidayCard from './HolidayCard'
import { Holiday } from '../constants/HolidayInterfaces'
import InfiniteScroll from 'react-infinite-scroll-component';



function HolidayLists() {
    const [packages, setPackages]: any = useState([])
    const [limit, setLimit] = useState({skip: 0, limit: 40})
    const [hasMore, sethasMore] = useState(true)
    const [count, setcount] = useState(0)
    const { data } = useQuery(GET_HOLIDAYS_QUERY(limit.skip, limit.limit));


    useEffect(() => {
        if(data){            
            let newPackages: any = data.getPackages.result.packages;
            
            if(newPackages && newPackages.length > 0) { 
                setPackages((p: any) => [...p, ...newPackages])
            } else {
                sethasMore(false)
            }
            setcount(Math.max(data.getPackages.result.count, packages.length))
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
            <p className="title is-4" style={{color: 'navy'}}> {count} Available Holidays </p>
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
