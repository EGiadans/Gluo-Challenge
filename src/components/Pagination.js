import React from 'react';
import './styles/Pagination.css';

const ListElement = ({ number, isActive, onClick }) => {
    const style = isActive ? 'List__element List__element--active' : 'List__element';
    return (
        <div className={style} onClick={onClick}>{number}</div>
    );
}

const Pagination = ({ heroesPerPage, totalHeroes, paginate, currentPage, previousPage, nextPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="Pagination">
            <div className="List__paginator List__paginator--left" onClick={previousPage}>&lt;</div>
            {pageNumbers.map(number => (
                <ListElement
                    key={number}
                    isActive={currentPage === number}
                    number={number}
                    onClick={() => paginate(number)}
                />
            ))}
            <div className="List__paginator List__paginator--right" onClick={nextPage}>&gt;</div>
        </div>
    );
};

export default Pagination;
