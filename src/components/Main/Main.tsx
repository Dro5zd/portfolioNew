import React from 'react';
import s from './Main.module.css'
import img from './myPortrait.jpg'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <img className={s.mainPhoto} src={img} alt="portrait"/>
                <div className={s.textContainer}>
                    <h1>I'm Drobotyuk Andrii.</h1>
                    <span>Front-end developer</span>
                    <p>I'm a Ukrainian based web designer & front‑end developer focused on crafting clean &
                        user‑friendly
                        experiences, I am passionate about building excellent software that improves the lives of those
                        around
                        me.</p>


                    <button>more about me</button>
                </div>
            </div>

        </div>
    );
};