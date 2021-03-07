import React from 'react'

export default function Container(props) {
    return (
        <div className="container w-screen h-screen absolute top-0 overflow-scroll mx-auto flex flex-1 flex-col font-sans">
            {props.children}
        </div>
    )
}
