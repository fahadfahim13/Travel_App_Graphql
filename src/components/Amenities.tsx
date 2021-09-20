import React from 'react'
import { amenity } from '../constants/HolidayInterfaces'


const icon_name: any = {
    'plane': 'fa fa-plane',
    'train': 'fa fa-train',
    'car': 'fa fa-car',
    'bus': 'fa fa-bus'
}

function Amenities(props:{amenities: amenity[]}) {
    const { amenities } = props
    
    return (
        <div style={{color: 'yellow'}}>
            <p className="subtitle is-6" style={{color: 'yellow'}}>Includes:</p>
            
            <div className='subtitle is-4'>
            {amenities && amenities.map((am: amenity) => 
                <span className="icon-text" style={{marginRight: '10px'}} key={am.title}>
                    <span className="icon">
                        <a href={am.icon} style={{color: 'yellow'}} target='_blank' rel="noreferrer">
                            <i className={icon_name[am.title]}></i>
                        </a>
                    </span> 
                </span>
            )}
            </div>
        </div>
    )
}

export default Amenities
