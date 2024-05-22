import { Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import image from '../../assets/20210604_224230_1.jpg';
import alphabetPersion from '../../constants/alphabetPersion';
import ActionThemeButton from '../ActionThemeButton';
import  SocialMediaIcons from '../SocialMediaIcons';
const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    return (
        <>
        <ActionThemeButton />
            <Avatar src={image} sx={{
                height: '10rem', width: "10rem", margin: '0 auto', mt: 3, display: {
                    xs: "none",
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block'
                }
            }} variant='rounded' />

            <Typography variant='h6' color={'secondary'}>
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersion} characters="ملیکا اصلاحی " onComplete={() => { setStart(true) }} />
            </Typography>
            {start && (<Typography variant='caption' color={'gray'}>
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersion} characters="برنامه نویس وتوسعه دهنده ی فول استک  " />
            </Typography>)}
      <SocialMediaIcons />
        </>


    )
}
export default SidebarHeader;