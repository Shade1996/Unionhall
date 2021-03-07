import React from 'react'

export default function Page(props) {
    return (
        <div className="w-screen h-screen" 
        style={{backgroundColor:"#F1EFE4"}}
        >
            {props.insert}
        </div>
    )
}
