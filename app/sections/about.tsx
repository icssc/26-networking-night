"use client";

import VariableProximity from "@/components/VariableProximity";
import Typography from "@mui/material/Typography";
import { useRef } from 'react';
import { fredoka } from "@/lib/fonts";
import { bubblyTitleStyle } from "./landing";
import ScrollFloat from "@/components/ScrollFloat";

export default function About(){
    const containerRef = useRef(null);

    return(
        <div className="flex min-h-screen w-screen flex-col items-center justify-center px-6">
            <div ref={containerRef} className="leading-none text-center">
            <ScrollFloat
                textClassName="text-[clamp(3rem,8vw,4.5rem)] font-bold leading-tight tracking-tight"
                variant="galaxyStar"
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                >
                What is Networking Night?
            </ScrollFloat>
            </div>
            <div className="mt-20">
            
                <Typography className="max-w-3xl text-center" variant="subtitle1">
                    Networking Night is a high-energy, cross-company event, where students and professionals from across the tech industry will be brought together for an exciting night of rotating table games and speed networking rounds that encourage collaboration, communication, and quick thinking. Our night will conclude with an open-format networking to deepen conversations and make lasting bonds. With refreshments and raffle prizes earned, Networking Night goes beyond traditional career events, serving as an opportunity to build confidence, expand your network, and form real connections.
                </Typography>
            </div>
        </div>
    );
}