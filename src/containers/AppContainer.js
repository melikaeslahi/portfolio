import { useEffect, useState } from 'react';
import '../App.css';
import SwipeableViews from 'react-swipeable-views';
import MainLayout from '../layouts/MainLayout';
import {SideBar} from '../components/sidebar/';
import {Page }from '../components/pages' ;
import  PagesContainer from './PagesContainer';
import SidebarContainer from './SidebarContainer';
import MainContext from '../context';
import { DrawerActionButton } from '../components/drawer';
import {Home , Aboute ,Courses ,Resume ,Comments ,Contact} from '../pages/index';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
 
 
 

function App() {
  const [pageNumber, setpageNumber] = useState(0);
const [ drawerOpen , setDrawerOpen]=useState(false);
const [mode , setMode] = useState();
const theme = useTheme();
const prefersDarkMode= useMediaQuery('prefers-color-scheme:dark');

const isMdUp =useMediaQuery( theme.breakpoints.up("md") );
useEffect(()=>{
   setMode(prefersDarkMode ? 'dark' :'light');
} , [])
useEffect(()=>{
  if(isMdUp){
    setDrawerOpen(false);
  }
}, [isMdUp]);

  const handlePageNumber = (event, newValue) => {
    setpageNumber(newValue);
  }
  const handleThemeChange =()=>{
    setMode(prevmode=> prevmode === 'light' ? 'dark' : 'light');
  }
  return (
    <MainContext.Provider value={
    { pageNumber,
     handlePageNumber,
     handleThemeChange,
     drawerOpen,
     setDrawerOpen}
    }> 
<MainLayout mode={mode}>
      <SidebarContainer>
      <SideBar    />
      </SidebarContainer>
      <DrawerActionButton  />
      <PagesContainer>
        <SwipeableViews 
                     index={pageNumber}
                     onChange={handlePageNumber}
        >
        <Page pageNumber={pageNumber} index={0} >
          <Home  helmetTitle="ملیکا اصلاحی | صفحه ی اصلی"/>
           
        </Page>

        <Page pageNumber={pageNumber} index={1} >  
          <Aboute    helmetTitle="ملیکا اصلاحی| درباره ی من"/>
        </Page>

        <Page pageNumber={pageNumber} index={2} >
          <Resume  helmetTitle="ملیکا اصلاحی|رزومه من" />
        </Page>

        <Page pageNumber={pageNumber} index={3} >
          <Courses helmetTitle="ملیکا اصلاحی| دوره ها ی من  "/>
        </Page>

        <Page pageNumber={pageNumber} index={4} >
           <Comments  helmetTitle=" ملیکا اصلاحی|نظرات دانشجویان " />
        </Page>
        <Page pageNumber={pageNumber} index={5} >
          <Contact   helmetTitle=" ملیکا اصلاحی| ارتباط با من "/>
        </Page>
        </SwipeableViews>
      
      </PagesContainer>

    </MainLayout>

    </MainContext.Provider>
      );
}

export default App;
