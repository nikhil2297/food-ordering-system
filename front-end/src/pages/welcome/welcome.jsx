import { Box, Container, Paper, styled } from "@mui/material";
import React from "react";
import WelcomeImage from "../../assets/images/welcome-page.png";
import logo from "../../assets/images/cravings-logo-3.png";
import "./welcome.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Login from "../login/login"
import Regsiter from "../register/register"
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.background.default})`,
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

function TabPanel(props) {
  const { children, value, index, tabClassName } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={tabClassName}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Welcome = () => {
  const navigateTo = useNavigate();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const onTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const onLoginSuccessHandler = () => {
    navigateTo('/home')
  }

  return (
    <Container className="welcome-root-container">
      <StyledPaper elevation={3} className="left-container">
        <img className="logo" alt="Everyday Cravings" src={logo} />
        <h1>Let's start ordering</h1>
        <img className="welcome-image" src={WelcomeImage} alt="Welcome" />
      </StyledPaper>

      <Container className="right-container">
      <Container class="tab-nav-container">
      <Tabs
          value={selectedTab}
          onChange={onTabChange}
          className="tab-container"
          centered
          indicatorColor="null"
        >
          <StyledTab
            className={selectedTab === 0 ? "tab selected-tab" : "tab"}
            label="Login"
          />
          <StyledTab
            className={selectedTab === 1 ? "tab selected-tab" : "tab"}
            label="Register"
          />
        </Tabs>

        <TabPanel value={selectedTab} index={0} tabClassName={'login-panel'}>
          <Login onLoginSuccess={onLoginSuccessHandler}/>
        </TabPanel>
        <TabPanel value={selectedTab} index={1} tabClassName={'register-panel'}>
        <Regsiter/>
        </TabPanel>

      </Container>
      </Container>
    </Container>
  );
};

export default Welcome;
