import Image from "next/image"
import Typography from '@mui/material/Typography';


export default function Landing(){

    return(
        <div className="flex justify-center w-screen mt-70">

            <div className="flex items-center  gap-20">
                <div>
                    <Image src="/graphics/moon.png"  alt="moon" height="300" width="300"/>
                    
                </div>

                <div className="flex flex-col items-center">
                    <Typography variant="h3">Networking</Typography>
                    <Typography variant="h3">Night</Typography>
                </div>                
            </div>

            
        </div>

    );


}