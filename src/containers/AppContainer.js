import { useEffect, useState } from 'react';
import '../App.css';
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

  
  const handleThemeChange =()=>{
    setMode(prevmode=> prevmode === 'light' ? 'dark' : 'light');
  }
  return (
    <MainContext.Provider value={
    { 
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
      
        <Page   index={0} >
          <Home  helmetTitle="ملیکا اصلاحی | صفحه ی اصلی"/>
           
        </Page>

        <Page  index={1} >  
          <Aboute    helmetTitle="ملیکا اصلاحی| درباره ی من"/>
        </Page>

        <Page   index={2} >
          <Resume  helmetTitle="ملیکا اصلاحی|رزومه من" />
        </Page>

        <Page   index={3} >
          <Courses helmetTitle="ملیکا اصلاحی| دوره ها ی من  "/>
        </Page>

        <Page   index={4} >
           <Comments  helmetTitle=" ملیکا اصلاحی|نظرات دانشجویان " />
        </Page>
        <Page   index={5} >
          <Contact   helmetTitle=" ملیکا اصلاحی| ارتباط با من "/>
        </Page>
        
      
      </PagesContainer>

    </MainLayout>

    </MainContext.Provider>
      );
}

export default App;
