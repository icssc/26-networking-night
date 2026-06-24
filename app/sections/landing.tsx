"use client";

import Image from "next/image"
import Typography from '@mui/material/Typography';
import VariableProximity from "@/components/VariableProximity";
import { fredoka } from "@/lib/fonts";
import { useRef } from 'react';
import Button from "@mui/material/Button";
import { StarIcon } from "@/components/StarIcon";
import { motion } from "motion/react";

export const bubblyTitleStyle = {
    fontSize: "clamp(3rem, 8vw, 4.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.045em",
    lineHeight: 0.9,
} as const;




const planetHoverClass =
    "pointer-events-auto opacity-75 transition-opacity duration-300 hover:opacity-90";

export default function Landing(){
    const networkingContainerRef = useRef<HTMLDivElement | null>(null);
    const nightContainerRef = useRef<HTMLDivElement | null>(null);
    return(
        <section className="relative flex min-h-screen w-screen items-center justify-center">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className={`absolute top-[34%] left-[1%] ${planetHoverClass}`}
                    whileHover={{ rotate: 8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <Image
                        src="/graphics/planet1.png"
                        alt=""
                        width={722}
                        height={662}
                        className="h-auto w-[min(280px,24vw)]"
                    />
                </motion.div>
                <motion.div
                    className={`absolute bottom-[5%] left-[42%] ${planetHoverClass}`}
                    whileHover={{ rotate: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <Image
                        src="/graphics/planet2.png"
                        alt=""
                        width={662}
                        height={648}
                        className="h-auto w-[min(170px,14vw)]"
                    />
                </motion.div>
                <motion.div
                    className={`absolute top-[2%] right-[1%] ${planetHoverClass}`}
                    whileHover={{ rotate: 6 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <Image
                        src="/graphics/planet3.png"
                        alt=""
                        width={977}
                        height={923}
                        className="h-auto w-[min(420px,36vw)]"
                    />
                </motion.div>
            </div>

            <div className="relative z-10 flex items-center gap-20">
                <div>
                    <Image src="/graphics/moon.png"  alt="moon" height="450" width="450"/>
                </div>

                <div className="flex flex-col items-center">

                 <Typography>ICSSC Presents</Typography>
                    <div ref={networkingContainerRef} className="relative flex flex-col leading-none">
                        <VariableProximity
                            font={fredoka}
                            variant="galaxyStar"
                            style={bubblyTitleStyle}
                            label="Networking"
                            fromFontVariationSettings="'wght' 600"
                            toFontVariationSettings="'wght' 700"
                            containerRef={networkingContainerRef}
                            radius={100}
                            falloff="linear"
                            fromScale={1}
                            toScale={1.08}
                        />
                    </div>

                    <div ref={nightContainerRef} className="relative flex flex-col leading-none">
                        <VariableProximity
                            font={fredoka}
                            variant="galaxyNebula"
                            style={bubblyTitleStyle}
                            label="Night"
                            fromFontVariationSettings="'wght' 600"
                            toFontVariationSettings="'wght' 700"
                            containerRef={nightContainerRef}
                            radius={100}
                            falloff="linear"
                            fromScale={1}
                            toScale={1.08}
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
        </section>

    );


}