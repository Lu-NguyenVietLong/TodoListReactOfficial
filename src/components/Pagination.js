import React from 'react';

function Pagination({postsPerPage, totalPosts,paginate, currentPage}) {


    const pageNumbers = [];
    console.log(totalPosts)

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
      <nav>
          <div className="pagination">
                {
                    pageNumbers.map(number => (
                            <a onClick={()=>paginate(number)} key={number} className={currentPage===number ? 'number-page active' : 'number-page'}>
                                {number}
                            </a>
                    ))
                }
          </div>
      </nav>
  )
}

export default Pagination;
