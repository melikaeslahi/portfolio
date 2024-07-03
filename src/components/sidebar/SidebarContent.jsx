import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

import {SidebarHeader ,SidebarFooter ,SidebarTabs} from './';
 

const SidebarContent = () => {

    return (
        <Box sx={{ justifyContent: "center", textAlign: "center" }}>
            <SidebarHeader />
            <Divider variant='middle' sx={{ mt: 2, backgroundColor: grey[900] }} />
            <SidebarTabs />
            <Divider variant='middle' sx={{ mt: 2, backgroundColor: grey[900] }} />
            <SidebarFooter />
        </Box>
    )
}
export default SidebarContent;