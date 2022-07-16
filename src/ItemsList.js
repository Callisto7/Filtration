import React, { useEffect, useState } from 'react'

function ItemsList({ getItems }) {
    const [items, setItems] = useState([])

//    При изменении getItems заполняем массив Items
    useEffect(() => {
        const newItems = getItems()
        console.log('render');
        setItems(newItems)
    }, [getItems])
  
    return (
        <ul>
            {/* Выводим наш список */}
            { items.map(i => <li key={i}>{i}</li>) }
        </ul>
    )
}

// Компонент связанный с useCallback

export default ItemsList