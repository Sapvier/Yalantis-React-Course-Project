import React, {useState} from 'react';

export const ItemsContext = React.createContext([])

const ItemsContextProvider = ({children}) => {
    const [addedItems, setAddedItems] = useState([])

    const addItem = (item, count) => {
         let result = addedItems.filter(addedItem => addedItem.id !== item.id)
         setAddedItems([...result, {...item, quantity: count}])
     }

    return (
        <ItemsContext.Provider value={{addItem, addedItems}}>
                {children}
        </ItemsContext.Provider>
    )
}
export default ItemsContextProvider


