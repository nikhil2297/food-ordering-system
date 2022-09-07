import SideDrawer from "../../components/side-drawer/side-drawer";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import "./home.scss"
import { Box } from "@mui/system";
import { Outlet, useLocation } from "react-router-dom";
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {  
  let routes = useLocation()
  const navigateTo = useNavigate();

const listData = [
    {
      index : 0,
      name : "Dashboard",
      children : <HomeOutlinedIcon/>,
      path : 'dashboard'
    },
    {
      index : 1,
      name : "Orders",
      children : <ShoppingCartOutlinedIcon/>,
      path : 'orders'
    },
    {
      index : 2,
      name : "Promotions",
      children : <LocalOfferOutlinedIcon/>,
      path : 'promotions'
    },
    {
      index : 3,
      name : "Menu",
      children : <FastfoodOutlinedIcon/>,
      path : 'menu'
    }
  ]

  console.log('Path : ', routes)
  // console.log('URL : ', url)

  const onMenuItemClickHandler = (menuItem) => {
    if(menuItem?.path){
      navigateTo(menuItem.path)
    }
  } 

  return <Box className="home-container">
  <SideDrawer className='home-side-drawer' onMenuItemClick={onMenuItemClickHandler} listData={listData}/>
  <Box className="home-play-area-container">
    <Outlet/>
  </Box>
  </Box>;
};

export default Home;
