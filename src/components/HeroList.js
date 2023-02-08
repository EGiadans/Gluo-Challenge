import React from "react";
import HeroItem from "./HeroItem";
import './styles/HeroList.css';

function HeroList({ heroes, deleteHero }) {
  return heroes.length > 0 ?  (
      <div>
        {heroes.map(hero => (
            <HeroItem key={hero.id} hero={hero} deleteHero={deleteHero}/>
        ))}
      </div>
  ) : (
      <div className="HeroList--empty">
          No hay resultados. Intenta buscar otro nombre.
      </div>
  )
}

export default HeroList;
