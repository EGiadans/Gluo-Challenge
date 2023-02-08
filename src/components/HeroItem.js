import React from "react";
import './styles/HeroItem.css';

function HeroItem({ hero, deleteHero }) {
    const { thumbnail, id, name, comics, series, stories, events } = hero;
    const pictureUrl = `${thumbnail['path']}.${thumbnail['extension']}`;

    return (
        <div className="Hero">
            <img className="Hero__picture" src={pictureUrl} alt={'altText'}/>
            <div className="Hero__data">
                <div className="Hero__name">{name}</div>
                <div className="Hero__details">
                    <span>Comics: {comics['available']} /&nbsp;</span>
                    <span>Serie: {series['available']} /&nbsp;</span>
                    <span>Stories: {stories['available']} /&nbsp;</span>
                    <span>Events:  {events['available']}</span>
                </div>
            </div>
            <div className="Hero__button" onClick={() => deleteHero(id)}>&#10799;</div>
        </div>
    )
}

export default HeroItem;
