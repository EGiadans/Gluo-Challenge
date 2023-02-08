import React from "react";
import './styles/HeroItem.css';

function HeroItem({ hero, deleteHero }) {
    const { thumbnail="", id, name, comics, series, stories, events } = hero;
    return (
        <div className="Hero">
            <img className="Hero__picture" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c58146e8-3480-4eb6-8497-0b5bed970d6a/ddspajr-552fcad7-9659-40cf-9fab-21777cd0ec32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1ODE0NmU4LTM0ODAtNGViNi04NDk3LTBiNWJlZDk3MGQ2YVwvZGRzcGFqci01NTJmY2FkNy05NjU5LTQwY2YtOWZhYi0yMTc3N2NkMGVjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0-KSQxM1xl1G3em80w42sCZpcYuAE5pxoVnQCcIJSZI" alt={'altText'}/>
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
