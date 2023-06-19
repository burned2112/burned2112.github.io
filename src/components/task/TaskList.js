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
    AddCircleOutlineOutlined, AssignmentTwoTone, ListAltTwoTone, ViewColumnRounded, ViewListRounded, ViewQuiltRounded,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalAddForm from "./AddTask";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

function TaskList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);

    const [age, setAge] = React.useState('');

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
                <Paper xs={12} md={12} square elevation={0} sx={{ width: '100%', minHeight: "96%", overflow: 'hidden', pl: 1, pr: 1}}>
                    1
                </Paper>
            </Grid>
            <Grid xs={10}>
                <Paper xs={12} square elevation={0} sx={{ width: '100%', minHeight: "15%", overflow: 'hidden', pt: 1, pl: 5, pr: 1}}>
                    <Paper elevation={2} sx={{maxWidth: '100px', height: '70px', float: 'left', mr: 2, padding: 2}} align={'center'}>
                        <AssignmentTwoTone sx={{color: 'rgb(21, 6, 64, 0.8)',fontSize: '40px'}} color={'primary'}/>
                    </Paper>
                    <Typography
                        variant={"h6"}
                        component={"div"}
                        sx={{maxWidth: '350px', fontWeight: 700}}
                        color={'primary'}
                    >
                        Мои задачи
                    </Typography>
                    <Typography
                        component={'div'}
                        align={'justify'}
                        sx={{fontWeight: 600, fontSize: '15px', color: 'rgb(21, 6, 64, 0.8)'}}
                    >
                        Все задачи пользователя
                    </Typography>

                </Paper>
                <Paper xs={12} sx={{ width: '95%', minHeight: "85%", overflow: 'hidden', pl: 1, pr: 1, mt: 4, ml: 5}}>

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
                            Поставить задачу
                        </Button>
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

export default TaskList;