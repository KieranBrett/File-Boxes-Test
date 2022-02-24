import { Link } from "react-router-dom";

// MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Login from './user/Login';
import Typography from '@mui/material/Typography';

import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';


const style = {
    background: 'white',
};

export default function NavBar() {
    return <Box sx={{ flexGrow: 1 }}>
        <AppBar style={style} position="static">
            <Toolbar>
                <Link to="/">
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                </Link>

                {/* Spaces buttons to the very right */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
                {/* if logged in, show signout button */}

                {/* if not logged in, show signin button */}
                <Login />
                
            </Toolbar>
        </AppBar>
    </Box>
}


// mongodb