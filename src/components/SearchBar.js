import React, { useState } from "react";
import './styles/SearchBar.css';

function SearchBar({ searchHero, cancelSearch }) {
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleCancelSearch = () => {
        setSearch('');
        cancelSearch()
    }

    return (
        <div className="Searchbar">
            <div className="Searchbar__icon">&#128269;</div>
            <input
                placeholder="Buscar como..."
                className="Searchbar__input"
                value={search}
                onChange={handleInputChange}>
            </input>
            <div
                className="Searchbar__cancel"
                onClick={handleCancelSearch}>{search !== '' ? '⨯' : '\u00A0'}
            </div>
            <div className="Searchbar__button" onClick={() => searchHero(search)}>Buscar</div>
        </div>

    )
}

export default SearchBar;
