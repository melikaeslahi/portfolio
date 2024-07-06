import { Box, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Particles from "react-particles";
import TextTransition, { presets } from "react-text-transition";

import { loadFull } from "tsparticles";
import Typed from "typed.js";
import bg01 from '../assets/bg01.jpg'
import { link } from "../constants/particels";

const Home = ({helmetTitle}) => {
    const strings = [
        "برنامه نویس هستم",
        "برنامه نویس فول استک هستم",
        " برنامه نویس اپلیکیشن های تحت وب هستم",
       
    ];
    const [index, setIndex] = useState(0)
    const nameEl = useRef(null);
    // const infoEl = useRef(null);

    const particelsInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    });

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" ملیکا اصلاحی "],
            typeSpeed: 110,
            backSpeed: 80,
            showCursor: false,
        }
        );

        const stringTransition = setInterval(() => {
            setIndex((index) => index + 1);
        }, 3000);
        // const typedInfo = new Typed(infoEl.current, {
        //     strings: strings,
        //     startDelay: 1500,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     typeSpeed: 40,
        //     loop: true,
        //     showCursor: false,
        // })
        return () => {
            // typedInfo.destroy();
            typedName.destroy();
            clearInterval(stringTransition);
        }

    }, []);

    return (


        <Box sx={{
            backgroundImage: `url(${bg01})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            color: 'whitesmoke',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'


        }}>
            <Box component='div' sx={{ display: 'flex' }} >
                <Particles id="tsparticles" options={link} init={particelsInit} loaded={particlesLoaded} />
                <Typography variant='h3' color='#F93c92' > {'{{'} </Typography>
                <Typography variant='h3' color='red' ref={nameEl}>   </Typography>
                <Typography variant='h3' color='#F93c92' > {'}}'} </Typography>
            </Box>
            <Helmet><title> {helmetTitle}   </title></Helmet>
            {/* <Typography variant='h4' color='whitesmoke' ref={infoEl} sx={{
                textDecoration: 'underline',
                textDecorationColor: '#F93c92',
            }}>  </Typography> */}
            <Box component='div' sx={{ display: 'flex' }} >
                <TextTransition springConfig={presets.wobbly} >
                    <Typography variant='h4' color='whitesmoke' sx={{
                        textDecoration: 'underline',
                        textDecorationColor: '#F93c92',
                    }}> {strings[index %  strings.length]} </Typography>
                </TextTransition>


                <Typography variant='h4' color='whitesmoke'> {' '}  من یک  </Typography>
            </Box>




        </Box>
    )

}
export default Home;