import React, {useEffect, useState} from "react";
import data from "./response_marvel.json";
import HeroList from './components/HeroList';
import ListHeader from "./components/ListHeader";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import './App.css';

const LS_HEROES_KEY = 'heroes';

function App() {
    const [heroes, setHeroes] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [heroesPerPage] = useState(7);

    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;

    const currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(heroes.length / heroesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleDeleteHero = (id) => {
        const updatedArray = heroes.filter(hero => hero.id !== id);
        setHeroes(updatedArray);
        localStorage.setItem(LS_HEROES_KEY, JSON.stringify(updatedArray));
    }

    const handleSearchHero = (name) => {
        const heroesLS = JSON.parse(localStorage.getItem(LS_HEROES_KEY));
        setIsSearching(true);
        paginate(1);
        setHeroes(heroesLS.filter(hero => hero.name.match(name)))
    };

    const handleRemoveFilter = () => {
        setIsSearching(false);
        setHeroes(JSON.parse(localStorage.getItem(LS_HEROES_KEY)));
    };

    useEffect(() => {
        const heroesLS = JSON.parse(localStorage.getItem(LS_HEROES_KEY));
        if (heroesLS) setHeroes(heroesLS)
        else localStorage.setItem(LS_HEROES_KEY, JSON.stringify(data.data.results))
    }, []);

    return (
      <div className="App">
         <div className="App__header">
             <ListHeader />
             <SearchBar searchHero={handleSearchHero} cancelSearch={handleRemoveFilter}/>
         </div>
          <HeroList heroes={currentHeroes} deleteHero={handleDeleteHero}/>
          {!isSearching && (
              <Pagination
                heroesPerPage={heroesPerPage}
                totalHeroes={heroes.length}
                paginate={paginate}
                currentPage={currentPage}
                previousPage={previousPage}
                nextPage={nextPage}
              />
          )}
      </div>
    );
}

export default App;
