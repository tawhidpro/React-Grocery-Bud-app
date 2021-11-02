import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  const  handleSubmit = (e) =>{
    e.preventDefault()
    if(!name){
      showAlert(true,'Please enter value','danger')
    }
    else if(name && isEditing){
      //deal with editing
    }
    else{
      //show alert
      showAlert(true,'Item added successfully','success')
      const newitem = {id: new Date().getTime().toString(),title: name }
      setList([...list,newitem]);
      setName('');
    }
  }

  const showAlert = (show="false", msg="", type="") =>{
      setAlert({show,msg,type})
  }
  const clearList =()=>{
    showAlert(true,'Items removed successfully','danger')
    setList([]);
  }


  return <section className="section-center">

    <form className="grocery-form" onSubmit={handleSubmit} >
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>   }
      <h3>Grocery Bud</h3>
      <div className="form-control">
        <input className="grocery" value={name} onChange={(e) => setName(e.target.value)} placeholder="item name" type="text" name="" id="" />
        <button type="submit" className="submit-btn">
          {isEditing? 'Edit' : 'Add'  }
        </button>
      </div>
    </form>

    <div className="grocery-container">
      <List items={list} />
      <button onClick={clearList} className="clear-btn">
        clear all items
      </button>
    </div>
  </section>
}

export default App
