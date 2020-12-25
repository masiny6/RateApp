import React from "react"

const AddClass = (Component, className) => {
    return (props) => {
        return(
        <div className = {className}>
            <Component/>
        </div>
        )
    }
}

export default AddClass