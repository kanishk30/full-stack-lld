import React, { useCallback } from 'react'

const ItemsList = () => {
    const [items, setItems] = React.useState(['item1', 'item2', 'item3', 'item4'])

    const handleRemove = useCallback((itemToRemove) => {
        console.log('handleRemove function called...')
        setItems((prevItems) => prevItems.filter(item => item !== itemToRemove))
    }, [])

    return (
        <div>
            {items.map((item) => (
                <div key={item} style={{ margin: 10, padding: 20 }} >
                    {item}
                    <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
            ))}
        </div>
    )

}

export default ItemsList