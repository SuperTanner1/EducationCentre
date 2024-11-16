import React from 'react';
import { Container, CssBaseline, Typography} from '@mui/material';
import ContactUs from './shared.js';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

function Header() {
    return (
        <Box>
            <Typography variant="h1">Overview</Typography>
        </Box>
    )
}

function Description() {
    return (
        <Box>
            <Grid container sx={{justifyContent:"center", alignItems:"center"}}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                </Grid>
            </Grid>
        </Box>
    )
}

export default function System() {
    return (
        <Stack>

            <ContactUs/>
        </Stack>
    )
}