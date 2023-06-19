import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {observer} from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import {Autocomplete, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
    AddCircleOutlineOutlined,
    AssignmentTwoTone, ChatRounded,
    ListAltTwoTone,
    PeopleAltRounded,
    ViewColumnRounded,
    ViewListRounded,
    ViewQuiltRounded,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalAddForm from "./AddOrder";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import SwitchSetting from "../SwitchSetting";
import ListEmployees from "../ListEmployees";
import LeftBoard from "../LeftBoard";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "45%",
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

const cols1 = [
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

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),

];



function OrderList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [openMessage, setOpenMessage] = React.useState(false);

    const [age, setAge] = React.useState('');

    const handleClickOpenMessage = () => {
        setOpenMessage(true);
    };

    const handleClickCloseMessage = () => {
        setOpenMessage(false);
    };


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let top100Films = null;



    return (

        <Grid container>
            <Grid xs={2} >
                <LeftBoard/>
                <SwitchSetting />
                <Box height={10} />
                <ListEmployees />
            </Grid>
            <Grid xs={10}>
                <Paper xs={12} sx={{ width: '100%', minHeight: "17%", overflow: 'hidden', pt: 1, pl: 5, pr: 1}}>
                    <Paper elevation={2} sx={{maxWidth: '100px', height: '70px', float: 'left', mr: 2, padding: 2}} align={'center'}>
                        <PeopleAltRounded sx={{color: 'rgb(21, 6, 64, 0.8)',fontSize: '40px'}} color={'primary'}/>
                    </Paper>
                    <Typography
                        variant={"h6"}
                        component={"div"}
                        sx={{maxWidth: '350px', fontWeight: 700}}
                        color={'primary'}
                    >
                        Все счета
                    </Typography>
                    <Typography
                        component={'div'}
                        align={'justify'}
                        sx={{fontWeight: 600, fontSize: '15px', color: 'rgb(21, 6, 64, 0.8)'}}
                    >
                        Все счета компании
                    </Typography>



                </Paper>
                <Paper xs={12} sx={{ width: '95%', minHeight: "85%", overflow: 'hidden', pl: 1, pr: 1, mt: 4, ml: 5}}>


                    <Box height={10} />
                    <Stack direction={"row"} spacing={2} className={"my-2 mb-2"}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Movie" />}
                        />
                        <Typography
                            component={"div"}
                            sx={{maxWidth: '350px'}}
                            color={'primary'}
                        >
                            <Button onClick={open} title={'Написать сообщение всем сотрудникам'}><ChatRounded sx={{fontSize: '30px'}} /></Button>
                            <Dialog open={open} onClose={handleClickCloseMessage}>
                                <DialogTitle>Subscribe</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please enter your email address here. We
                                        will send updates occasionally.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClickCloseMessage}>Cancel</Button>
                                    <Button onClick={handleClickCloseMessage}>Subscribe</Button>
                                </DialogActions>
                            </Dialog>
                        </Typography>
                        <Typography
                            variant="h6"
                            component={"div"}
                            sx={{ flexGrow: 1}}
                        ></Typography>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 70}}>
                            <InputLabel id="select-standard-label"><ViewListRounded sx={{color: 'rgb(21, 6, 64, 0.8)',fontSize: '30px'}} /></InputLabel>
                            <Select
                                labelId="select-standard-label"
                                id="select-standard"
                                value={age}
                                onChange={handleChange}
                                label="age"
                            >
                                <MenuItem autoFocus={true} selected={true} value={'Список'}><ViewListRounded sx={{color: 'rgb(21, 6, 64, 0.8)',fontSize: '30px'}} /> </MenuItem>
                                <MenuItem value={'Три колонки'}><ViewColumnRounded sx={{color: 'rgb(21, 6, 64, 0.8)',fontSize: '30px'}} /> </MenuItem>
                                <MenuItem value={'Канбан'}><ViewQuiltRounded sx={{color: 'rgb(21, 6, 64, 0.8)',fontSize: '30px'}} /> </MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={handleOpen} variant={"contained"} endIcon={<AddCircleOutlineOutlined />}>
                            Добавить
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <ModalAddForm closeEvent={handleClose} />
                            </Box>
                        </Modal>
                    </Stack>
                    <Box height={10} />
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Grid>

        </Grid>

    );
}

export default OrderList;