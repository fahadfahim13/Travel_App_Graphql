import React from 'react'

function StartingPrice(props: {startingPrice: number}) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
        currencyDisplay: 'narrowSymbol'
      });
    return (
        <div>
            <p className="subtitle is-6" style={{color: 'white'}}>Starts from</p>
            
            <div className='subtitle is-4' style={{color: 'white'}}>
                {formatter.format(props.startingPrice)}
            </div>
        </div>
    )
}

export default StartingPrice
