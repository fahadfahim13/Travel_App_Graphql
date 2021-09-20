import React from 'react'

function CardImage(props: {thumbnail: string, discountTitle?: string}) {
    const { thumbnail, discountTitle } = props
    return (
        <div className="column is-mobile">
            <figure className="image">
                {discountTitle!=='' && <h3>{discountTitle}</h3>}
                <img className="card-image" src={thumbnail} 
                style={{width: '300px', height: 'auto'}} alt={thumbnail} />
            </figure>
        </div>
    )
}

export default CardImage
