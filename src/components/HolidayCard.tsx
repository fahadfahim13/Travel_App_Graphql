import React from 'react'


function HolidayCard() {
    return (
        <div className="card" style={{borderRadius: '20px', overflow: 'hidden'}}>
            <div className="card-content">
                <div className="columns">
                    <div className="column is-5">
                        <figure className="image">
                            <img className="card-image" src="https://cdn.tryotel.com/package/images/1.jpg" style={{width: '250px', height: 'auto'}} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="media-content">
                            <p className="title is-3">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-footer" style={{backgroundColor: 'navy', borderRadius: '0px 0px 20px 20px'}}>
                <div className="card-footer-item level">
                    <div className="level-left">Hello World</div>
                    <div className="level-right">Hello World</div>
                </div>
            </div>
            
        </div>
    )
}

export default HolidayCard
