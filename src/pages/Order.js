import React from 'react';
import Container from "@mui/material/Container";
import OrderList from "../components/order/OrderList";
import Box from "@mui/material/Box";

const Order = () => {
    return (
        <Box sx={{display: 'block', bgcolor: "#e7eafd", minHeight: '100vh', align: 'center'}}>
            <Container maxWidth={'xl'} sx={{bgcolor: "#e7eafd", minHeight: "100%", minWidth: "100%",}}>
                <OrderList />
            </Container>
        </Box>
    );
};

export default Order;