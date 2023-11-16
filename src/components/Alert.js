import React from 'react'

function Alert(props) {
    const capitalise = (word)=>{
        var lower = word.toLowerCase();
        if (lower === 'danger'){
            lower = 'error';
        }
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}: </strong>{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert