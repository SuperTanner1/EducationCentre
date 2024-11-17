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
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';


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

function Test() {
    return (
        <Typography>Can you insert me?</Typography>
    )
}

const backgroundColor = ('#FFFFFF', '#E6EFFE')
const transparentTabColours = ('#FFFFFF', '#E6EFFE')
const opaqueTabColors = ('#00B7F0')

function Navigation() {
    return (
        <Container maxWidth="xl">
            <CssBaseline/>
            <Box sx={{background:backgroundColor, height:60, justifyContent:"center", alignItems:"center"}}>
                <AppBar>
                    <Grid container padding={1} columns={12} direction="row" sx={{justifyContent:"center", alignItems:"center", height:1}}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CenterGrid>
                                <Button href="/" variant="contained">Homepage</Button>
                            </CenterGrid>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CenterGrid>
                                <Button href="/primary" variant="contained">Primary</Button>
                            </CenterGrid>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CenterGrid>
                                <Button href="/onetoone" variant="contained">1-to-1</Button>
                            </CenterGrid>
                        </Grid>
                    </Grid>
                </AppBar>
            </Box>
        </Container>
    )
};

function CenterGrid(props) {
    return (
        <Grid container sx={{justifyContent:"center", alignItems:"center",}}>
            {props.children}
        </Grid>
    )
}

function Assessment() {
    const sizeOfItems = 6
    return (
        <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
            <Stack>
                <Typography>
                    Depending on the age of your child, we provide an assessment using past 11+ or GCSE questions to assess their current skills
                    to create a suitable learning plan to fill their gaps in their knowledge to achieve their learning goals.
                </Typography>
                <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                    <Grid item xs={sizeOfItems} sm={sizeOfItems} md={sizeOfItems} lg={sizeOfItems} xl={sizeOfItems}>
                        <Box
                            component="img"
                            sx={{
                                height: 1,
                                width: 1,
                                maxHeight: { xs: 675, md: 675 },
                                maxWidth: { xs: 600, md: 600 },
                            }}
                            src="./static/images/tutoring.jpg"
                        />
                    </Grid>
                </Grid>
            </Stack>
        </Grid>
    )
}

function Work() {
    const sizeOfItems = 6
    return (
        <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
            <Stack>
                <Typography>
                    We then provide work during class time and homework according to the learning plan every lesson while providing support by expert teachers
                    with a cumulative of 23 years of experience.
                </Typography>
                <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                    <Grid item xs={sizeOfItems} sm={sizeOfItems} md={sizeOfItems} lg={sizeOfItems} xl={sizeOfItems}>
                        <Box
                            component="img"
                            sx={{
                                height: 1,
                                width: 1,
                                maxHeight: { xs: 675, md: 675 },
                                maxWidth: { xs: 600, md: 600 },
                            }}
                            src="./static/images/tutoring.jpg"
                        />
                    </Grid>
                </Grid>
            </Stack>
        </Grid>
    )

}

function Progress() {
    const sizeOfItems = 6

    return (
        <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                <Stack>
                    <Typography>
                        Their progress is tracked by regularly checking how far through the learning plan they are, and by regular assessing progress through
                        past papers.
                    </Typography>
                    <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                        <Grid item xs={sizeOfItems} sm={sizeOfItems} md={sizeOfItems} lg={sizeOfItems} xl={sizeOfItems}>
                            <Box
                                component="img"
                                sx={{
                                    height: 1,
                                    width: 1,
                                    maxHeight: { xs: 675, md: 675 },
                                    maxWidth: { xs: 600, md: 600 },
                                }}
                                src="./static/images/tutoring.jpg"
                            />
                        </Grid>
                    </Grid>
                </Stack>
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
                <Box sx={{width:'100%', height:'10%', backgroundColor:transparentTabColours, justifyContent:"center", alignItems:"center"}}>
                    <Tabs value={page} onChange={changePage}>
                        {props.tabNames.map((tabName, index) => (
                            <Tab key={index} label={tabName}/>
                        ))}
                    </Tabs>
                </Box>
                

                <div hidden={page != 0}>
                    <Assessment/>
                </div>

                <div hidden={page != 1}>
                    <Work/>
                </div>

                <div hidden={page != 2}>
                    <Progress/>
                </div>
            </Box>
        </Grid>
    )
}

function Description() {
    return (
        <Container maxWidth='xl'>
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
        </Container>
    )
}

function PageTemplate() {
    const tabName = ['Assessment', 'Work', 'Progress'];
    return (
        <Container maxWidth='xl'>
            <Box backgroundColor={backgroundColor}>
                <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                    <Box sx={{width:'85%', height:"70%"}}>
                        <Typography variant='h1'>Methodology</Typography>
                        <Stack>
                            <Description/>
                            <MethodogicalDescription tabNames={tabName} test={<Test/>}/>
                        </Stack>
                    </Box>
                </Grid>
            </Box>
        </Container>
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
            <Navigation/>
            <PageTemplate/>
            <ContactUs/>
        </Stack>
    )
}