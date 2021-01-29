import React, {useEffect, useState} from 'react';
import "../card/ItemCard.css";



function AddItemStatusMessage({status}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => setVisible(false), 5000)
    }, [])

    if ((status === 'error') && visible) {
        return (
            <div className="errorMessage">
                Something went wrong, try again
            </div>
        );
    }
    else if ((status === 'processing') && visible) {
        return (
            <div className="processingMessage">
                Submitting the product...
            </div>
        );
    }
    else if ((status === 'success') && visible) {
        return (
            <div className="successMessage">
                Success!
            </div>
        )
    }
    else return null
}


export default AddItemStatusMessage;