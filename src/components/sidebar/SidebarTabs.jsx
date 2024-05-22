import { Tab, Tabs } from '@mui/material';
import {useTheme} from '@mui/material/styles'
import { grey } from '@mui/material/colors';
import { useContext } from 'react';
import MainContext from '../../context';
import { tabsData } from  '../../constants/tabsData';
const SidebarTabs = () => {
    const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext);
    const data = tabsData();
    const theme = useTheme();
    return (
        <Tabs orientation='vertical'
            variant='scrollable'
            scrollButtons="auto"
            allowScrollButtonsMobile
            indicatorColor={ theme.palette.mode === 'dark' ? "secondary" :'primary'}
            textColor= { theme.palette.mode === 'dark' ? "secondary" :'primary'}
            value={pageNumber}
            onChange={handlePageNumber}

        >
            {
            data.map((tab, index) => (
                <Tab label={tab.label}
                     key={index}
                    icon={tab.icon}
                    iconPosition="start"

                    sx={{
                        "&.MuiTab-root": {
                            minHeight: 50,
                            borderRadius: 2,
                            my: 0.5,
                            mx: 1,
                            backgroundColor: theme.palette.mode === 'dark' ? grey[800] : grey[500]
                        }
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />
                ))
            }

        </Tabs>
    )
}
export default SidebarTabs;