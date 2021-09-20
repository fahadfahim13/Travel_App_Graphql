import React from 'react'
import { Holiday } from '../constants/HolidayInterfaces'
import DurationPoints from './DurationPoints'
import CardImage from './CardImage'
import Amenities from './Amenities'
import StartingPrice from './StartingPrice'


function HolidayCard(props: Holiday) {
    const { title, description, thumbnail, durationText, loyaltyPointText, amenities, startingPrice } = props
    return (
        <div className="card card-shadow" style={{borderRadius: '20px', border: '1px solid #D5D8DC'}}>
            <div className="card-content">
                <div className="columns is-mobile">
                    <CardImage thumbnail={thumbnail} />
                    <div className="column is-mobile">
                        <div className="media-content">
                            <p className="title is-3" style={{color: 'navy', fontWeight: 'bold'}}>{title}</p>
                        </div>
                        <div className="media-content">
                            <p className="subtitle is-7">{description}</p>
                        </div>
                        <DurationPoints durationText={durationText} loyaltyPointText={loyaltyPointText} />
                    </div>
                    
                </div>
            </div>

            <div className="card-footer" style={{backgroundColor: 'navy', borderRadius: '0px 0px 20px 20px'}}>
                <div className="card-footer-item level">
                    <div className="level-left"> <Amenities amenities={amenities} /> </div>
                    <div className="level-right"> <StartingPrice startingPrice={parseFloat(startingPrice.toString())} /> </div>
                </div>
            </div>
            
        </div>
    )
}

export default HolidayCard
