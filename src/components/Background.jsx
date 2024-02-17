import { useEffect } from 'react'
import './Background.css'



export const Background = (props) => {

    const {locDisplay} = props

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
        // The maximum is exclusive and the minimum is inclusive
    }

    // const colors = ['color-mix(var(--primary)', 'var(--secondary)', 'var(--accent)']
    const colors = [
        'color-mix(in srgb, var(--primary) 40%, var(--bg) 80% )', 
        'color-mix(in srgb, var(--secondary) 40%, var(--bg) 80% )', 
        'color-mix(in srgb, var(--accent) 40%, var(--bg) 80% )'
    ]


    useEffect(()=>{
        let elements = document.getElementsByClassName('bg-element')
        function createObject(key) {
            for (let i = 0; i < elements.length; i++) {
              elements[i].style.top = Math.floor(Math.random() * (window.innerHeight*2)-500) + 100 + "px";
              elements[i].style.left = Math.floor(Math.random() * window.innerWidth-500) + 100 + "px";
              elements[i].style.width = randomInt(window.innerWidth*0.2, window.innerWidth) + "px";
              elements[i].style.height = randomInt(window.innerHeight*0.2, window.innerHeight) + "px";
              elements[i].style.rotate = randomInt(0, 360) + 'deg';
              elements[i].style.backgroundColor = colors[randomInt(0, colors.length-1)];
            }
        }

        for(let j = 0; j < 5; j++) {
            createObject()
        }
    }, [locDisplay])

    return (
        <div className='background'>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
            <div className='bg-element'>index</div>
        </div>
    )
}