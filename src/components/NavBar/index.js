import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction, Container} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './index.css'
import {Link} from "react-router-dom";

export function NavBar() {
    const [value, setValue] = useState(0);

    return (
        <Container maxWidth='sm' className="stickToBottom">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/cantors-resources/"
                    value="meetings"
                    label="Meetings"
                    icon={<CalendarMonthIcon/>}/>
                <BottomNavigationAction
                    component={Link}
                    to="/cantors-resources/songs"
                    value="songs"
                    label="Songs"
                    icon={<LibraryMusicIcon/>}/>
            </BottomNavigation>
        </Container>
    )
}