import * as React from 'react';
import { Container, CssBaseline, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

export default function ContactUs() {
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