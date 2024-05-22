import { GitHub, Instagram, Telegram } from '@mui/icons-material';
import {   Box, IconButton } from '@mui/material';
const SocialMediaIcons =()=>{
    return(
        <Box component="div" sx={{ textAlign: 'center', m: '0 auto' }} >
        <IconButton aria-label="Github" >
            <a href="https://github.com/melikaeslahi" target='_blank' rel='noopene noreferre'> <GitHub sx={{color:'gray'}} /></a>
        </IconButton>

        <IconButton aria-label="Github" >
            <a href="https://instagram.com/melikaeslahi" target='_blank' rel='noopene noreferre'> <Instagram sx={{color:'gray'}} /></a>
        </IconButton>

        <IconButton aria-label="Github" >
            <a href="https://telegram.com/melikaeslahi" target='_blank' rel='noopene noreferre'> <Telegram sx={{color:'gray'}} /></a>
        </IconButton>

    </Box>
    )
}

export default SocialMediaIcons;