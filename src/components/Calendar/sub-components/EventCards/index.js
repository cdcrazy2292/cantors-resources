import React from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {EventsModel} from "../../models/events-model";
import './index.css'

export function EventCards() {
    const events = EventsModel
    const getEventCards = () => {
        return events.map((event, index) => {
            return (
                <Grid className="whole-event">
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {event.date}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {event.time}
                            </Typography>
                            <Typography variant="body2">
                                {event.room}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
    }
    return (
        getEventCards()
    )
}