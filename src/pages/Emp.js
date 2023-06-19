import React from 'react';
import MiniDrawer from "../components/NavBar2";
import EmpList from "../components/emp/EmpList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



const Emp = () => {
    return (
        <Box sx={{display: 'block', bgcolor: "#e7eafd", minHeight: '100vh', align: 'center'}}>
            <Container maxWidth={'xl'} sx={{bgcolor: "#e7eafd", minHeight: "100%", minWidth: "100%",}}>
                <EmpList />
            </Container>
        </Box>
    );
};

export default Emp;