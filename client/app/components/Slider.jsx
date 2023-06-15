"use client";
import { useState } from "react";
import Card from "./Card"

export default function Slider(props) {
    console.log(props)
    const [position, setPosition] = useState(0);
    const itemWidth = 350;

    const handlePrev = () => {
        if (position === 0) return null
        setPosition(position + itemWidth)
    }

    const handleNext = () => {
        if (position === -(itemWidth * (data.length - 3))) return null
        setPosition(position - itemWidth)
    }

    return (
        <div className="flex flex-row  items-center overflow-hidden">
            <button onClick={() => handlePrev()} className="text-2xl z-50 bg-black h-56">
                ◀
            </button>
            <ul className="flex flex-row transition-transform duration-300 z-0 -mr-72 overflow-hidden pr-12"
                style={{ transform: `translateX(${position}px)` }}>
                {data.map(el => {
                    return (
                        <li key={el}>
                            {<Card displayOn={props.displayOn} />}
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => handleNext()} className="text-2xl z-50 bg-black h-56  w-20 -ml-96">
                ▶
            </button>
        </div>
    )
}

let data = [1, 2, 3, 4, 5]