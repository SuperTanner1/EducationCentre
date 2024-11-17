import React from 'react';
import { Container, CssBaseline, Typography} from '@mui/material';
import ContactUs from './shared.js';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 48,
        },
        h2: {
            fontSize: 35, 
        }
    }
});

const paddingDefault = 2;

function CenterGrid(props) {
    return (
        <Grid container sx={{justifyContent:"center", alignItems:"center",}}>
            {props.children}
        </Grid>
    )
}

function GridOfTabs(props)
{
    const [page, setPage] = React.useState(0);
    const changePage = (change, newPage) => setPage(newPage);
    return (
        <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
            <Box sx={{width:'100%', height:"70%"}}>
                <Box sx={{width:'100%', height:'10%', backgroundColor:'#00B7F0', justifyContent:"center", alignItems:"center"}}>
                    <Tabs value={page} onChange={changePage}>
                        {props.tabNames.map((tabName) => (
                            <Tab label={tabName}/>
                        ))}
                    </Tabs>
                </Box>
                

                <div hidden={page != 0}>
                    <Typography>Assessment</Typography>
                </div>

                <div hidden={page != 1}>
                    <Typography>Work</Typography>
                </div>

                <div hidden={page != 2}>
                    <Typography>Progress</Typography>
                </div>
            </Box>
        </Grid>
    )
}


function PageTemplate() {
    const [page, setPage] = React.useState(0);
    const changePage = (change, newPage) => setPage(newPage);
    const tabName = ['Assessment', 'Work', 'Progress'];
    return (
        <Box>
            <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                <Box sx={{width:'85%', height:"70%"}}>
                    <Box sx={{width:'100%', height:'10%', backgroundColor:'#00B7F0', justifyContent:"center", alignItems:"center"}}>
                        <Tabs value={page} onChange={changePage}>
                            <Tab label="Methodology"/>
                            <Tab label="Teachers"/>
                        </Tabs>
                    </Box>

                    
                    <div hidden={page !== 0}>
                        {page === 0 &&
                            <Stack>
                                <Description/>
                                <MethodogicalDescription tabNames={tabName}/>
                            </Stack>
                        }
                    </div>
                    <div hidden={page !== 1}>
                        {page === 1 && 
                            <Typography>Teachers</Typography>
                        }
                    </div>
                </Box>
            </Grid>
        </Box>
    )
}

function Description() {
    return (
        <Box>
            <Grid container sx={{justifyContent:"center", alignItems:"center"}}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Typography>
                    We track progress of each student from day one. 

                    We assess your child to find their strengths and weaknesses. Then give differentiated work and regular assessments to ensure progress. 

                    All to provide bespoke teaching for your child.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                </Grid>
            </Grid>
        </Box>
    )
}

function MethodogicalDescription(props) {
    return (
        <GridOfTabs tabNames={props.tabNames}/>
    )
}

export default function System() {
    return (
        <Stack>
            <PageTemplate/>
            <ContactUs/>
        </Stack>
    )
}