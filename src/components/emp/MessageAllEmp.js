import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MessageAllEmp(closeEvent) {

    const [openMessage, setOpenMessage] = React.useState(false);


    const handleClickCloseMessage = () => {
        setOpenMessage(false);
    };

    return (
        <div>

            <Dialog open={openMessage} onClose={handleClickCloseMessage}>
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
        </div>
    );
}
export default MessageAllEmp;