"use client";

import Image from "next/image"
import Typography from '@mui/material/Typography';
import VariableProximity from "@/components/VariableProximity";
import { fredoka } from "@/lib/fonts";
import { useRef } from 'react';
import Button from "@mui/material/Button";
import { StarIcon } from "@/components/StarIcon";

const bubblyTitleStyle = {
    fontSize: "clamp(3rem, 8vw, 4.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.045em",
    lineHeight: 0.9,
} as const;




export default function Landing(){
    const containerRef = useRef(null);
    return(
        <div className="flex justify-center w-screen mt-70">

            <div className="flex items-center  gap-20">
                <div>
                    <Image src="/graphics/moon.png"  alt="moon" height="450" width="450"/>
                    
                </div>

                <div className="flex flex-col items-center">

                 <Typography>ICSSC Presents</Typography>
                    <div ref={containerRef} className="relative flex flex-col leading-none">
                        <VariableProximity
                            font={fredoka}
                            variant="galaxyStar"
                            style={bubblyTitleStyle}
                            label="Networking"
                            fromFontVariationSettings="'wght' 600"
                            toFontVariationSettings="'wght' 900"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                    </div>

                    <div ref={containerRef} className="relative flex flex-col leading-none">
                        <VariableProximity
                            font={fredoka}
                            variant="galaxyNebula"
                            style={bubblyTitleStyle}
                            label="Night"
                            fromFontVariationSettings="'wght' 600"
                            toFontVariationSettings="'wght' 900"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                        

                    </div>

                    <div className="mt-8">
                        <Typography variant="galaxyStar">Date | Location </Typography>                        
                    </div>


                    <div className="flex mt-10 gap-3">
                        <Button variant="contained" color="galaxyStar" endIcon={<StarIcon />}>
                            Student RSVP
                        </Button>
                        <Button variant="outlined" color="galaxyNebula" endIcon={<StarIcon />}>
                            Industry Professional RSVP
                        </Button>
                     </div>
                </div>   



            </div>

            
        </div>

    );


}