import {
    CopyrightRounded,
    FavoriteRounded,
} from '@mui/icons-material';
import {Box , Typography} from '@mui/material';

const SidebarFooter=()=>{
    return(
        <Box 
        sx={{
           flexGrow:1 ,
           display:'flex',
           flexDirection:'column',
           justufyContent:'end',
           alignItems:'center',
           height:100  , 
           mt:2
        }}
       >
         <Typography variant='subtitle2' color="whitesmoke" >
           طراحی شده با {" "}
           <FavoriteRounded  sx={{verticalAlign:'middle' ,color:'red' ,height:20 }} />
         </Typography>
         <Typography variant='subtitle2' color="whitesmoke" >
           کپی رایت 1402{" "}
           <CopyrightRounded  sx={{verticalAlign:'middle' ,color:'white' ,height:20 }} />
         </Typography>
       </Box>
    )
}
export default SidebarFooter;
