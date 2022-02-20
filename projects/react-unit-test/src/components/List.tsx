import { useState } from "react";

type ListProps = {
  initialItens : string[];
}

function List({initialItens} : ListProps) {
  const [newItem, seNewItem] = useState('');
  const [list, useList] = useState(initialItens);

  function addToList(){
    setTimeout(() => {
      useList(state => [...state, newItem]);
    }, 500)
  }

  function removeItemToList(item: string){
    setTimeout(() => {
      useList(state => state.filter(item => item !== item));
    }, 500)
  }
  return (
    <>
    <input type="text" placeholder="New item" value={newItem} onChange={e => seNewItem(e.target.value)}/>
    <button onClick={addToList}>Adicionar</button>
    <ul>
      {
      list.map(item => <li key={item}>
        {item}
        <button onClick={() => removeItemToList(item)}>Remover</button>
        </li>)
      }
      
    </ul>
    </>
  )
}

export default List
