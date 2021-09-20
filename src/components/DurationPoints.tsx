import React from 'react'
import { HomeFilled, GlobalOutlined } from '@ant-design/icons'


function DurationPoints(props: {durationText: string, loyaltyPointText: string}) {
    const { durationText, loyaltyPointText } = props
    return (
        <div className="column">
            <div className="media-content">
                <p className="title is-6" style={{color: 'navy' }}><HomeFilled /> {durationText}</p>
            </div>
            <div className="media-content">
                <p className="title is-6" style={{color: 'navy' }}><GlobalOutlined /> {loyaltyPointText}</p>
            </div>
        </div>
    )
}

export default DurationPoints
