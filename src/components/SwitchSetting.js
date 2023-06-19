import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import {ApartmentRounded, PersonAddAltRounded} from "@mui/icons-material";

function SwitchSetting() {
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List
            sx={{borderTop: '1px solid black', width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2 }}
            subheader={<ListSubheader>Настройки поиска</ListSubheader>}
            rounded
        >
            <ListItem>
                <ListItemIcon>
                    <PersonAddAltRounded />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Мои счета" />
                <Switch
                    edge="end"
                    onChange={handleToggle('me')}
                    checked={checked.indexOf('me') !== -1}
                    inputProps={{
                        'aria-labelledby': 'switch-list-label-wifi',
                    }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ApartmentRounded />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Счета компании" />
                <Switch
                    edge="end"
                    onChange={handleToggle('comp')}
                    checked={checked.indexOf('comp') !== -1}
                    inputProps={{
                        'aria-labelledby': 'switch-list-label-bluetooth',
                    }}
                />
            </ListItem>
        </List>
    );
}

export default SwitchSetting;