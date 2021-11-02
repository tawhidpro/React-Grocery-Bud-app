import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  
  return <div className="grocery-list" >
    {
      items.map((item) => {
        const {title,id} = item;
        return  <article className="grocery-item" key="id" >
            <p className="title">
              {title} {id}
            </p>
            <div className="btn-container">
              <button className="edit-btn">
                <FaEdit />
              </button>
              <button className="delete-btn">
                <FaTrash />
              </button>
            </div>
        </article>
      })
    }
  </div>
}

export default List
