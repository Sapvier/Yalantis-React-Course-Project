import React, {useState} from 'react';
import "../card/ItemCard.css";
import EditItemForm from "./EditItemForm";
import EditItemModal from "./EditItemModal";


function MyItemCard({item}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="itemCard">
            <div className="itemCardContent">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Origin: {item.origin}</p>
            </div>
            <div className="buttonContainer">
                <button className="buyButton" onClick={() => setIsOpen(true)}>Edit</button>
            </div>
            <EditItemModal open={isOpen} onClose={() => setIsOpen(false)}>
                <EditItemForm item={item} onClose={() => setIsOpen(false)}/>
            </EditItemModal>
        </div>
    );
}


export default MyItemCard;