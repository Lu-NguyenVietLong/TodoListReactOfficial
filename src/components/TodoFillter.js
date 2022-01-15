import React from 'react'

function TodoFillter({setStatus}) {
    const statusOption = e => {
        setStatus(e.target.value)
    }

    return (
        <div className="todo-container-fillter">
            <select onChange={statusOption} className="todo-fillter">
                <option value="all">All</option>
                <option value="complete">Hoàn thành</option>
                <option value="unComplete">Chưa hoàn thành</option>
            </select>
        </div>
    )
}

export default TodoFillter
