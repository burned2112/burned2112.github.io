import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import * as PropTypes from "prop-types";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import SideBar from "../components/SideBar";
import Tables from "../components/Tables";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

function Item(props) {
    return null;
}
const defaultTheme = createTheme();

Item.propTypes = {children: PropTypes.node};

const Main = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={defaultTheme} sx={{bgcolor: '#101f33'}}>
            <Container sx={{minHeight: "100px", minWidth: "100%", bgcolor: '#101f33'}}>
                <Grid sx={{minHeight: "100%"}}  container spacing={3}>
                    <Grid item md={12} display={"block"} sx={{border: "1px solid white", marginRight: "0px"}}>
                        <Grid container spacing={3}>
                            <Grid item xs={4} md={4}>1</Grid>
                            <Grid item xs={4} md={4}>2</Grid>
                            <Grid item xs={4} md={4}>3</Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <SideBar />
                    </Grid>
                    <Grid item xs={11} md={10}>
                        <Tables />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Main;