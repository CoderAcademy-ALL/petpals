import { Divider, Drawer, List, ListItemText, ListItem, ListItemIcon, ListItemButton } from "@mui/material"
import { styled } from '@mui/system';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import { useNavContext } from './Navbar/NavProvider'
// import {NavContext, NavProvider } from './Navbar/NavProvider'
import { DrawerCloseButton } from './styled/Navbar'
import { Colors } from './styled/Theme'
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from 'polished';


// const useStyles = makeStyles({
//     AppDrawer: {
//         width: "500px",
//     }
// })

const MiddleDivier = styled(() => (
    <Divider variant="middle" />
))``;


export default function AppDrawer() {

    const { drawerOpen, setDrawerOpen } = useNavContext()
    // const classes = useStyles();

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon 
                        sx={{
                            fontSize: '2.8rem',
                            color: lighten(0.1, Colors.secondary),
                        }}
                    />
                </DrawerCloseButton>
            )}

            <Drawer open={drawerOpen}>
                <List>
                    {['Home', 'Pet Parent', 'Pet Sitter'].map((text, index) => (
                        <ListItem key={text}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {<MeetingRoomRoundedIcon />}
                                </ListItemIcon>
                                <ListItemText secondary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>

    )
}

