import { Badge, Chip, Divider, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Skill = ({icon , name, value, color}) => {

    return (
   <>
     <Divider
      textAlign="right" 
       sx={{
        "&::before, &::after":{
            borderColor:`${color}.main`
        }
       }}
     >
       <Chip  label={name}  color={color} sx={{p:3}} icon={
        <Box  component="img" sx={{height:30}} src={icon} />
       } />  
     </Divider>
     <Box sx={{display:'flex' ,alignItems:'center'}}>
     <Box sx={{minWidth:35 , mr:1}}>

        <Typography variant="body1" color="purple" sx={{p:1}}> 
                 <Badge badgeContent={`${Math.round(value) }%`} color={color} />
         </Typography>
     </Box>
     <Box sx={{width:"100%" , mr:1}}>
        <LinearProgress  variant="determinate" value={value} color={color} sx={{ height:10 , borderRadius:3}} />
        </Box>
     </Box>
   </>
    )
}
export default Skill;