import React from "react";
import {Container} from "@mui/material";
import {NavBar} from "../../components/NavBar";
import {ContentContainer} from "../ContentContainer";
import {BrowserRouter} from "react-router-dom";


export default function MainContainer() {
    return (
        <React.Fragment>
            <BrowserRouter>
            <Container maxWidth="sm">
                <ContentContainer />
                <NavBar />
            </Container>
            </BrowserRouter>
        </React.Fragment>
    )
}