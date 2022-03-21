import React from "react";
import { Routes, Route } from "react-router-dom";
import {Calendar} from "../Calendar";
import {Songs} from "../Songs";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Calendar />}/>
            <Route path="/songs" element={<Songs />}/>
        </Routes>
    )
}