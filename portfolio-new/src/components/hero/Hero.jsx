import './hero.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import profile from '../assets/profilepicture.jpg'
import svg from '../assets/hero.svg'


export function Hero() {
    
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current , {
            showCursor: true,
            backDelay: 1500,
            typeSpeed: 150,
            cursorChar: "|",
            strings: ["English", "Русский", "עברית"]
        })
    }, [])
    
    return (
        <div id='hero' className='hero'>
            <h3>Hi There, Im</h3>
            <h1>Artem Meshkov</h1>
            <h3>Frontend developer</h3>
            <a href="#portfolio">
            <img className='profile_picture' src={profile} alt="profile" />
            </a>
            <div className='languages_animate'>
            <span>|</span>
            <span ref={textRef}></span>
            </div>
            <select id="languages"
                onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value)">
                <option>Choose Language</option>
                <option value="/RU">Русский</option>
                <option value="/HE">עברית</option>
            </select>

            <img className='svg' src={svg} alt="cool svg" />
        </div>
    )
}
