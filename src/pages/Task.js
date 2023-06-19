import React from 'react';
import MiniDrawer from "../components/NavBar2";
import TaskList from "../components/task/TaskList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



const Task = () => {
    return (
        <Box sx={{display: 'block', bgcolor: "#e7eafd", minHeight: '100vh', align: 'center'}}>
            <Container maxWidth={'xl'} sx={{bgcolor: "#e7eafd", minHeight: "100%", minWidth: "100%",}}>
                <TaskList />
            </Container>
        </Box>
    );
};

export default Task;