import React from 'react';
import ReportList from "../components/report/ReportList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useLocation} from "react-router-dom";



const Report = () => {

    return (
        <Box sx={{display: 'block', bgcolor: "#e7eafd", minHeight: '100vh', align: 'center'}}>
            <Container maxWidth={'xl'} sx={{bgcolor: "#e7eafd", minHeight: "100%", minWidth: "100%",}}>
                <ReportList />
            </Container>
        </Box>
    );
};

export default Report;