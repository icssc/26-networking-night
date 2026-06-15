"use client";

import Image from "next/image"
import Typography from '@mui/material/Typography';
import VariableProximity from "@/components/VariableProximity";
import { useRef } from 'react';




export default function Landing(){
    const containerRef = useRef(null);
    return(
        <div className="flex justify-center w-screen mt-70">

            <div className="flex items-center  gap-20">
                <div>
                    <Image src="/graphics/moon.png"  alt="moon" height="300" width="300"/>
                    
                </div>

                <div className="flex flex-col items-center">

                 <Typography>ICSSC Presents</Typography>

                    <div ref={containerRef} className="relative">
                        <VariableProximity
                            style={{ fontSize: "4rem" }}
                            label="Networking"
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                    </div>

                    <div ref={containerRef} className="relative">

                        <VariableProximity
                            style={{ fontSize: "4rem" }}
                            label="Night"
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                    </div>

                    </div>                
            </div>

            
        </div>

    );


}