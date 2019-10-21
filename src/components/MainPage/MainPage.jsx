import React from 'react';
import styles from './MainPage.module.css'
import {NavLink} from "react-router-dom";
import Particles from "react-particles-js";


const MainPage = (props) => {
    const part = {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 10,
                "random": true
            },
            "move": {
                "direction": "bottom",
                "out_mode": "out"
            },
            "line_linked": {
                "enable": false
            }
        },
        "interactivity": {
            "events": {

                "onclick": {

                    "enable": true,

                    "mode": "remove"

                }
            },
            "modes": {
                "remove": {
                    "particles_nb": 10
                }
            }
        }
    };

    return (
        <div className={styles.container}>
            <Particles className={styles.particles} params={part}/>
            <div className={styles.text}>
                <h2 className={styles.main}>DREAM</h2>
                <p className={styles.it}>--- IT ---</p>
                <h2 className={styles.main}>WISH</h2>
                <p className={styles.it}>--- IT ---</p>
                <h2 className={styles.main}>DO</h2>
                <p className={styles.it}>--- IT ---</p>
            </div>
            <NavLink to='/mySchedule'>
                <button className={styles.but}>START PLANNING YOUR PATH TO YOUR GOAL</button>
            </NavLink>
        </div>
    )

};

export default MainPage;
