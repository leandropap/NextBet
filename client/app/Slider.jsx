"use client";
import { useState } from "react";
import Card from "./Card";

export default function Slider(props) {
    const [position, setPosition] = useState(0);
    const itemWidth = 380;

    const handlePrev = () => {
        setPosition(position - itemWidth)
    }

    const handleNext = () => {
        setPosition(position + itemWidth)
    }

    return (
        <div className="flex flex-row overflow-hidden z-50">
            <button onClick={() => handlePrev()} className="text-2xl">
                ◀
            </button>
            <ul className="flex flex-row transition-transform duration-300 z-0"
                style={{ transform: `translateX(${position}px)` }}>
                {data.map(el => {
                    return (
                        <li>
                            {<Card displayOn={props} />}
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => handleNext()} className="text-2xl z-50">
                ▶
            </button>
        </div>
    )
}

let data = [1, 2, 3, 4, 5]