import React from 'react'

function TodoSearch({setSearchTodo}) {
    return (
        <div className="todo-search">
            <input type="text" className="search-input" placeholder="Tìm..." onChange={e => setSearchTodo(e.target.value)}/>
        </div>
    )
}

export default TodoSearch
