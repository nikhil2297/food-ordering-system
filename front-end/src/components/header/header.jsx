import React from "react";
import Container from '@mui/material/Container';
import logo from "../../assets/images/cravings-logo.png"
import { Avatar } from "@mui/material";
import './header.scss'
const Header = () => {
    return(
        <header>
            <Container className="header-root-container">
                <div className="header-container">
                    <Avatar src={logo} sx={{ width: 100, height: 100 }}/>
                </div>
            </Container>
        </header>
    )
}

export default Header;