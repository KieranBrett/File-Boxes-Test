// MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export default function NavBar() {
    return <Box>
        <AppBar position="static">
            <Toolbar>

                {/* if logged in, show signout button */}
                
                {/* if not logged in, show signin button */}
                <h1>Test</h1>
            </Toolbar>
        </AppBar>
    </Box>
}


// mongodb