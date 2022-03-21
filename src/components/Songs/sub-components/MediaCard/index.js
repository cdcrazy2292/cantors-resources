import React from "react";
import {Card, CardContent, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {SongsModel} from "../../models/songs-model";
import './index.css'

export function MediaCard() {
    const songs = SongsModel
    const getSongCards = () => {
        return songs.map((song, index) => {
            return (
                <Grid className="whole-card" key={`card-${index}`}>
                    <Card sx={{display: 'flex'}} className="media-card">
                        <Grid container justifyContent="space-between">
                            <Grid item className="song-info">
                                <CardContent>
                                    <Typography component="div" variant="h6">
                                        {song.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {song.description ? song.description : "Sung by Cantor"}
                                    </Typography>
                                </CardContent>
                                <IconButton
                                    aria-label="play/pause"
                                    onClick={event => window.location.href = song.sourceUrl}
                                >
                                    <PlayArrowIcon
                                        sx={{height: 38, width: 38}}/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <CardMedia
                                    component="img"
                                    sx={{width: '100%'}}
                                    image={song.img}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            )
        })
    }
    return (
        getSongCards()
    )
}