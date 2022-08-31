import SideDrawer from "../../components/side-drawer/side-drawer";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import "./home.scss"
import { Box } from "@mui/system";
import { Outlet, useLocation } from "react-router-dom";
import { Switch } from "@mui/material";

const Home = () => {  
  let routes = useLocation()
const listData = [
    {
      name : "Dashboard",
      children : <HomeOutlinedIcon/>,
      path : 'dashboard'
    },
    {
      name : "Orders",
      children : <ShoppingCartOutlinedIcon/>,
      path : 'orders'
    },
    {
      name : "Promotions",
      children : <LocalOfferOutlinedIcon/>,
      path : 'promotions'
    },
    {
      name : "Menu",
      children : <FastfoodOutlinedIcon/>,
      path : 'menu'
    }
  ]

  console.log('Path : ', routes)
  // console.log('URL : ', url)

  return <Box className="home-container">
  <SideDrawer className='home-side-drawer' listData={listData}/>
  <Box className="home-play-area-container">
    <Outlet/>
  </Box>
  </Box>;
};

export default Home;
