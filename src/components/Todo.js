import React, {useState} from 'react'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Todo({todo, removeTodo, checkAll, completeTodo, handleEditTodos, handleEditTime, showCompleteTime}) {
    
    const [edit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState('')
    


    const handleEdit = () => {
        setEdit(true)
    }

    const handleDoneEdit = id => {
        setEdit(false)
        if (editValue) {
            handleEditTodos(editValue, id)
        } else {
            setEditValue(todo.text)
        }
    }

    const handleChangeEdit = e => {
        setEditValue(e.target.value.toLowerCase())
    }



    if (edit) {
        return  (
            <div className={todo.isComplete ? 'todo-item complete' : 'todo-item'}>
                
                <div className='container-content'>
                    <div>
                        <input type='text' onChange={handleChangeEdit} value={editValue} name='editValue' className='input-edit' id='editValue'  />
                    </div>
                    <div className='todo-icons'>
                        <button className='done-btn' onClick={() => { handleDoneEdit(todo.id); handleEditTime(todo.id);}}>Xong</button>
                    </div>
                </div>
            </div>
        )
    }   else {
        return  (
            <div className={todo.isComplete ? 'todo-item complete' : 'todo-item'}>
                <label className='container-input '>
                    <input 
                        type='checkbox'
                        onChange ={() => {
                            completeTodo(todo.id);
                        }}
                        checked={todo.isComplete}
                        className='btn-check'
                        
                    />
                </label>
                <div className='container-content'>
                    <div>
                        <p className='todo-text'>{todo.text}</p>
                    </div>
                    <div className='todo-time'>
                        <div className='todo-time-create'>
                            <label>Create: </label>
                            {todo.date}
                        </div>
                        
                        {
                        todo.dateComplete &&
                        showCompleteTime &&
                        <div className='todo-time-complete'>
                            <label>Done: </label>
                            {todo.dateComplete}
                        </div>}
                        
                    </div>
                    <div className='todo-icons'>
                        
                        <TiEdit 
                            className='edit-icon'
                            onClick={handleEdit}
                        />
                        <RiCloseCircleLine 
                            onClick = {()=>removeTodo(todo.id)}
                            className='delete-icon'
                        />
                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Todo
