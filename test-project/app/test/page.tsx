'use client'

import { useState } from "react";

// const a = [42, "strings"] as const;
// const b = [42, "strings"];

function useMyState() {
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [name, setName] = useState('Player');

    // return {
    //     count: [count, setCount] as const,
    //     speed: [speed, setSpeed] as const,
    //     name: [name, setName] as const,
    // } 

    return {
        count: [count, setCount],
        speed: [speed, setSpeed],
        name: [name, setName]
    } as const
}

export default function Page() {
    const {
        count: [count, setCount],
        speed: [speed, setSpeed],
        name: [name, setName]
    } = useMyState();

    // const [count, setCount] = useState(0);
    // const [speed, setSpeed] = useState(1);
    // const [name, setName] = useState('Player');

    return (
        <div>
            <h1>Dashboard</h1>

            <br></br>

            <p>Player: {name}</p>
            <p>Score: {count}</p>
            <p>Speed: {speed}</p>

            <br></br>

            <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                onClick={() => setCount(count + 1)}>
                Increase Score
            </button>

            <br></br>

            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                rel="noopener noreferrer"
            >
                Deploy Now
            </button>

            <br></br>

            <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center  hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                onClick={() => setSpeed(speed + 1)}>
                Increase Speed
            </button>

            <br></br>

            {/* Input field to change player name */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter player name"
            />
        </div>
    );
}
