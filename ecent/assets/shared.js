import * as React from 'react';
import { Container, CssBaseline, Typography} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

/*
const theme = createTheme({
    typography: {
        h1: {
            fontSize: 48,
        },
        h2: {
            fontSize: 35, 
        }
    },
    palette: {
        primary: {
            main:'#187BE7'
        },
        secondary: {
            main:'#4695EC'
        }
    }
});
*/

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 48,
        },
        h2: {
            fontSize: 35, 
        }
    },
    palette: {
        primary: {
            main:('#FFFFFF', '#24A0F1')
        },
        secondary: {
            main:('#FFFFFF', '#0C74B8')
        }
    }
});

function CenterGrid(props) {
    return (
        <Grid container sx={{justifyContent:"center", alignItems:"center",}}>
            {props.children}
        </Grid>
    )
}

export function ContactUs() {
    const spacing = 1;
    const paddingDefault = 2;

    return (
        <Container maxWidth={"xl"}>
            <Grid container sx={{justifyContent:"center", alignItems:"center"}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                    <Typography variant="h2">Contact Us</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} padding={paddingDefault}>
                    <Stack direction={"row"} spacing={spacing}>
                        <MailIcon/>
                        <Typography variant='subtitle1'>admin@ecent.co.uk</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} padding={paddingDefault}>
                    <Stack direction={"row"} spacing={spacing}>
                        <PhoneIcon/>
                        <Typography variant='subtitle1'>01494230231</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} padding={paddingDefault}>
                    <Typography variant='subtitle1'>Copyright © All Rights Reserved</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} padding={paddingDefault}>
                    <Stack direction={"row"} spacing={spacing}>
                        <PlaceIcon/>
                        <Typography variant='subtitle1'>The Education Centre Ltd, 11 Duke Street, High Wycombe, HP136EE</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
};

export function Navigation(props) {
    return (
        <Container maxWidth="xl">
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Box sx={{bgcolor:`${'secondary'}.main`, opacity:0.85, height:60, justifyContent:"center", alignItems:"center"}}>
                    <AppBar>
                        <Grid container padding={1} columns={12} direction="row"  sx={{bgcolor:`${'secondary'}.main`, justifyContent:"center", alignItems:"center", height:1}}>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <CenterGrid>
                                    <Button color='primary' href={"/".concat(props.url)} variant="contained">{props.pageName}</Button>
                                </CenterGrid>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <CenterGrid>
                                    <Button color='primary' href="/primary" variant="contained">Primary</Button>
                                </CenterGrid>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <CenterGrid>
                                    <Button color='primary' href="/onetoone" variant="contained">1-to-1</Button>
                                </CenterGrid>
                            </Grid>
                        </Grid>
                    </AppBar>
                </Box>
            </ThemeProvider>

        </Container>
    )
};