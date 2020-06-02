import React from 'react'

import classes from './Toast.css'
import DeleteIcon from '../../../images/delete-button.jpg'

const toast = (props) => {
    return (
        <div className={classes.NotificationContainer}>
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