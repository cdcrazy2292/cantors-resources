import React from "react";
import {Container} from "@mui/material";
import './index.css'
import {MediaCard} from "./sub-components/MediaCard";

export function Songs() {
    return (
        <Container maxWidth="sm" className="songs-container">
            <MediaCard />
        </Container>
    )
}