import React from 'react';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <div onClick={() => {
            props.deleteItem(item.key)
        }} 
         >x
             </div>
        </span>
     </p>
     
    </div>})
    return <div>
        <div>
        {listItems}
        </div>
    
    </div>;
  }

  export default ListItems;