import React, {useContext} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Button from "@mui/material/Button";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const arr = [
    {
        id: '1',
        title: 'Все сотрудники',
    },
    {
        id: '2',
        title: 'В сети',
    },
    {
        id: '3',
        title: 'Нераспределенные',
    },
];

const LeftBoard = () => observer(function Leftboard() {
    const {user} = useContext(Context)
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">

            {arr.map((page, index) => (
                <ListItem button>
                    <ListItemText primary={page.title} />
                </ListItem>



            ))}
        </List>
    );
})

export default LeftBoard;