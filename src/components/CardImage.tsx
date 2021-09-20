import React from 'react'

function CardImage(props: {thumbnail: string}) {
    const { thumbnail } = props
    return (
        <div className="column is-mobile">
            <figure className="image">
                <img className="card-image" src={thumbnail} 
                style={{width: '300px', height: 'auto'}} alt={thumbnail} />
            </figure>
        </div>
    )
}

export default CardImage
