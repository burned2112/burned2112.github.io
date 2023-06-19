import React, {useContext} from 'react';
import {Context} from "../index";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {EMP_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {
    DeleteForever,
    PendingActions,
    AccountBalanceOutlined,
    BadgeOutlined,
    AssignmentOutlined,
    AccountTreeOutlined, AssignmentIndOutlined, ForumOutlined, SettingsSuggestOutlined, Person, PersonOutlined
} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {useLocation, useNavigate} from "react-router-dom";


const pages = [
    {id: 1, path_link: "/main", name: 'Процессы', link_icons: <AccountTreeOutlined></AccountTreeOutlined>},
    {id: 2, path_link: ORDER_ROUTE, name: 'Отчеты', link_icons: <PendingActions></PendingActions>},
    {id: 3, path_link: EMP_ROUTE, name: 'Задачи', link_icons: <AssignmentOutlined></AssignmentOutlined>},
    {id: 4, path_link: REGISTRATION_ROUTE, name: 'Сотрудники', link_icons: <BadgeOutlined></BadgeOutlined>},
    {id: 5, path_link: REGISTRATION_ROUTE, name: 'Общение', link_icons: <ForumOutlined></ForumOutlined>},
    {id: 6, path_link: REGISTRATION_ROUTE, name: 'Клиенты', link_icons: <AssignmentIndOutlined></AssignmentIndOutlined>},
    {id: 7, path_link: REGISTRATION_ROUTE, name: 'Финансы', link_icons: <AccountBalanceOutlined></AccountBalanceOutlined>},
    {id: 8, path_link: REGISTRATION_ROUTE, name: 'Настройки', link_icons: <SettingsSuggestOutlined></SettingsSuggestOutlined>},
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => observer(function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {user} = useContext(Context)

    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="relative" sx={{bgcolor: '#081627', minHeight: "107px", boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset"}}>
            <Container sx={{minWidth: "85%", display: "inline-block", marginRight: "0px", zIndex: '11100'}}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Бизнес план
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page,index) => (
                                <NavLink to={'/main'} activeClassName="selected"><MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem></NavLink>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Бизнес план
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                        {pages.map((page, index) => (
                            <NavLink to={page.path_link} activeClassName="selected"><Button
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}

                            >
                                <Typography>{page.link_icons}</Typography>
                                {page.name}
                            </Button></NavLink>
                        ))}
                    </Box>

                    {user.isAuth ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        :
                        <Box>
                            <Button
                                key={LOGIN_ROUTE}
                                onClick={() => user.setIsAuth(true)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <PersonOutlined></PersonOutlined> <br/> Вход
                            </Button>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
})
export default NavBar()
