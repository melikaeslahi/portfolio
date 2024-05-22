import {  KeyboardArrowLeft } from "@mui/icons-material";
import {   Typography } from "@mui/material";
const DevInfo =({children})=>{
  return(
    <Typography color='black' variant="body1" textAlign="left" sx={{ mt: 2 }} >

   {children}
    <KeyboardArrowLeft sx={{
        verticalAlign: 'bottom',
        color: 'primary.main'
    }} />

</Typography>
  )
}
export default DevInfo;