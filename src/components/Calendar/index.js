import React from "react";
import {Container} from "@mui/material";
import {EventCards} from "./sub-components/EventCards";
import './index.css'

export function Calendar() {
    return (
        <Container maxWidth="sm" className='events-container'>
            <EventCards />
        </Container>
    )
}