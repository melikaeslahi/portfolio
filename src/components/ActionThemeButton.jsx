import {   NightlightOutlined, WbSunnyOutlined } from '@mui/icons-material';
import { Fab ,Box, useTheme } from '@mui/material';
 
import { useContext}  from 'react';
import MainContext from '../context';
const ActionThemeButton=()=>{
    const theme = useTheme();
    const { handleThemeChange} = useContext(MainContext);
    return(
        <Box 
                 sx={{
                    position:'absolute',
                    display:{
                        xs:'none',
                        sm:'block',
                        md:'block',
                        lg:'block',
                        xl:'block'
                    }
                 }}
                >
                    <Fab 
                    variant="extended"
                     onClick={handleThemeChange} 
                     aria-label="ThemeChange" 
                     size="small"
                     color="secondary"
                      sx={{m:2 ,  color:'whitesmoke'}} >
                    {theme.palette.mode === 'dark' ? <WbSunnyOutlined sx={{m:1}} /> :  <NightlightOutlined sx={{m:1}} />}   
                    {theme.palette.mode === 'dark' ?  "تم روز" : 'تم شب' } 
                    </Fab>
                </Box> 
    )
}
export default ActionThemeButton; 