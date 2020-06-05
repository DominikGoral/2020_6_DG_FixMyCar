import React from 'react'

import classes from './Toast.css'
import DeleteIcon from '../../../images/delete-button.jpg'

const toast = (props) => {
    let color = ''
    let borderColor = ''
    if(props.toastType === "success") {
        color = '#a2f0a6'
        borderColor = '#28942d'
    } else if(props.toastType === "error") {
        color = '#f3c4c2'
        borderColor = '#d9534f'
    }
    return (
        <div className={classes.NotificationContainer} style={{ backgroundColor: `${color}`, border: `4px dashed ${borderColor}` }}>
            <div className={classes.NotificationImage}>
                {/* <img src={DeleteIcon} alt="errorIcon"/> */}
            </div>
            <div>
                {/* <p className={classes.NotificationTitle}>Title</p> */}
                <p className={classes.NotificationMessage}>{props.errorMessage}</p>
            </div>
        </div>
    )
}

export default toast