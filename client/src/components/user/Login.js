import * as React from 'react';

// React Router
import { Link } from "react-router-dom";

// MUI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [pass, setPass] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log(`username: ${username}`);
        console.log(`password: ${pass}`);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Log in
            </Button>

            {/* Dialog that opens/hides when button is clicked */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Log in to your Account
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Enter your username and password to log in.

                        <Link to="/register">Register here</Link> if you dont have an Account.
                        
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        // Set react state as true value
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="pass"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        // Set react state as true value
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} autoFocus>
                        Sign In
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}