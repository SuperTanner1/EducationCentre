import * as React from 'react';
import { Container, CssBaseline, Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Class } from '@mui/icons-material';

import ContactUs from "./shared.js";

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

const JoinButton = styled(Button)({
    width: 300,
});

const paddingDefault = 2;

function CenterGrid(props) {
    return (
        <Grid container sx={{justifyContent:"center", alignItems:"center",}}>
            {props.children}
        </Grid>
    )
}

function Navigation() {
    return (
        <Container maxWidth="xl">
            <CssBaseline/>
            <Box sx={{background:('#FFFFFF', '#E6EFFE'), height:140, justifyContent:"center", alignItems:"center"}}>
                <AppBar>
                    <Grid container padding={1} columns={12} direction="row" sx={{justifyContent:"center", alignItems:"center", height:1}}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <CenterGrid>
                                <Button href="/methodology" variant="contained">System</Button>
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

//


function Introduction() {
    const imageSize = 110
    return (
        <Container maxWidth="xl">
            <Box sx={{background:('#FFFFFF', '#E6EFFE'), height:700}}>
                <Grid container columns={12} sx={{justifyContent:"flex-start", alignItems:"flex-start", height:2/3, maxWidth:"xl"}}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                        <Stack spacing={"2.5%"} sx={{justifyContent:"center", alignItems:"center"}}>
                            <Stack sx={{justifyContent:"flex-start", alignItems:"center"}}>
                                <Stack direction="row" sx={{justifyContent:"center", alignItems:"center"}}>
                                    <img src="./static/images/ecentLogo.png" height={imageSize} width={imageSize}/>
                                    <img src="./static/images/awards/ofstedlogo.jpeg" height={imageSize} width={imageSize}/>
                                    <img src="./static/images/awards/businessAwards.jpg" height={imageSize} width={imageSize * 1.25}/>
                                </Stack>
                                <img src="./static/images/awards/tutoringServiceAward.jpg" height={imageSize * 1.3} width={imageSize*3.25}/>
                            </Stack>
                            
                            <ThemeProvider theme={theme}>
                                <Typography variant="h1">Bespoke teaching for your child</Typography>
                                <Typography variant="h2">A proven track record of results</Typography>
                            </ThemeProvider>
                        </Stack>

                        <Stack sx={{justifyContent:"center", alignItems:"center", paddingTop:"7.5%"}}>
                            <JoinButton variant="contained">Join Now</JoinButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};



function KeyFacts() {
    return (
        <Container maxWidth="xl">
            <Box sx={{background:('#FFFFFF', '#E6EFFE'), height:800}}>
                <Grid container sx={{justifyContent:"center", alignItems:"flex-start", height:1, maxWidth:"xl"}}>
                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{spacing:5}}>
                        <Stack spacing={5} sx={{justifyContent:"center", alignItems:"center", paddingTop:"5%", height:1}}>
                            {[
                                "We teach students from Year 1 to Year 13*", 
                                "We offer GCSE Maths, English and 11+ Tuition", 
                                "We offer one-to-one and group tuition classes"
                            ].map((elevation) => (
                                    <Card key={elevation} elevation={4} sx={{width:"90%", height:1/5 * 800, padding:5, justifyContent:"center", alignItems:"center"}}>
                                        <Grid container sx={{width:1, height:1, justifyContent:"center", alignItems:"center",}}>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{justifyContent:"center", alignItems:"center",}}>
                                                <Typography variant="subtitle1">{elevation}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                ))}
                        </Stack>

                    </Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5} padding={paddingDefault}>
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
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                        <Typography variant="caption">*We only offer A-Level Maths through one-to-one classes</Typography>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

function ClassCard(props) {
    return (
        <div
            hidden={props.value !== props.index}
        >
            {props.value === props.index && 
            
            <Stack direction="row" spacing={7.5} sx={{justifyContent:"center"}}>
                {(props.classList).map((classtype) => (
                    <Card sx={{height:550, width:400}}>
                        <Grid container sx={{ height:1, maxWidth:"xl", justifyContent:"center", alignItems:"center",}}>
                            
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                                <Typography variant="h3">{classtype[0]}</Typography>
                            </Grid>

                            
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                                <Stack direction="row" sx={{justifyContent:"flex-start", alignItems:"flex-end",}}>
                                    <Typography variant="h4" component="h2">{classtype[1]}</Typography>
                                    <Typography variant="body1" component="subtitle1">{classtype[2]}</Typography>
                                </Stack>
                                <Divider/>
                            </Grid>

                            
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                                <ul>
                                    {classtype[3].map((classproperty) => (
                                        <li>{classproperty}</li>
                                    ))}
                                </ul>
                            </Grid>

                            
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                                <Button>Learn More</Button>
                            </Grid>
                        </Grid>
                    </Card>
                ))}
            </Stack>
        
        }
        </div>
    )
}

function TestimonialsGrid(props) {
    return (
        <div
            hidden={props.value !== props.index}
        >
            {props.value === props.index && 
            
            <Grid container spacing={3}>
                {props.testimonials.map((testimony) => (
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Card sx={{height:1, width:1}}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                                    <Typography variant="h6" >{testimony[0]}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={paddingDefault}>
                                    <Typography variant="body1">{testimony[1]}</Typography>
                                </Grid>
                            </Grid>
                            
                        </Card>
                    </Grid>
                ))}       
            </Grid>
            
            }
        </div>
    )
}

function ClassOptions() {
    const [classType, setClass] = React.useState(0);
    const changeClass = (change, newClass) => setClass(newClass);

    const secondaryClasses = [
        [
            "GCSE Maths",
            "£15",
            "per hour",
            [
                "Teach GCSE Maths",
                "Combined teaching experience of 24 years",
                "An individual plan is made for each student",
                "Differentiated work will be given to ensure your child attains the highest grade possible",
                "Regular assessments to show progress"
            ]
        ],
        [
            "GCSE English",
            "£20",
            "per 1 hour and 15 minutes",
            [
                "Teach GCSE English",
                "Teaching experience of 20 years",
                "An individual plan is made for each student",
                "Differentiated work will be given to ensure your child attains the highest grade possible",
                "Regular assessments to show progress"
            ]
        ],
    ];
    const primaryClasses = [
        [
            "11+ Classes",
            "£12.50",
            "per hour",
            [
                "We teach well",
            ]
        ],
        [
            "SATS Classes",
            "£12.50",
            "per hour",
            [
                "And so do we",
            ]
        ],
    ];
    const oneToOneClasses = [
        [
            "A-Level or GCSE Maths",
            "£30",
            "per hour",
            [
            "Very experienced",
            ]  
        ],
    ];

    return (
        <Container maxWidth="xl" sx={{justifyContent:"center", alignItems:"center",}}>
            <Box sx={{background:('#FFFFFF', '#E6EFFE'), height:850}}>

                <Box padding={5}>
                    <Grid container sx={{justifyContent:"center", alignItems:"center",}}>
                        <Tabs value={classType} onChange={changeClass}>
                            <Tab label="Secondary"/>
                            <Tab label="Primary"/>
                            <Tab label="1-to-1"/>
                        </Tabs>
                    </Grid>
                </Box>

                <ClassCard value={classType} index={0} classList={secondaryClasses}/>
                <ClassCard value={classType} index={1} classList={primaryClasses}/>
                <ClassCard value={classType} index={2} classList={oneToOneClasses}/>
            </Box>

        </Container>

    )
};

/*
12 lists
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
['', ''],
*/

function Testimonials() {
    const [page, setPage] = React.useState(0);
    const changePage = (change, newPage) => setPage(newPage);
    const testimonialsOne = [
        ['Philippa Evans', 'Brilliant tuition. My daughter has just passed her grammar school test, having attended here. She loves it and she\'s improved so much in ability and confidence. Friendly, kind staff and a lovely group of children.'], 
        ['Lydia Flanders', 'Fantastic support, welcoming environment and good value for money.'], 
        ['Courtney', 'I came for english tutoring and not only have i improved immensely but made great friends along the way'],
        ['Katrina', 'Very good customer service'],
        ['Yasmeen Akhtar', 'Excellent! Highly recommend'],
        ['Jamil Hussain', 'Amazing teachers..my daughter has benefited immensely.'],
        ['Nagina Shafaqat', 'Amazing teachers, and excellent teaching skills. highly recommended!'],
        ['Tahir Mohammad', 'My children are from a broken-up family. My son came to me 2 years ago and had very little formal tutoring. He was a grade 1 in Maths. In 8 months, Hasib increased his grade to a 4. Highly recommended.'],
        ['Hassan Tariq', 'This amazing tuition centre has helped my grade immensely and i have gone from a grade 2-6 within a few months of hard work and consistency and lastly the help of the amazing teachers!'],
        ['Hussain', 'Ever since i have came here my grades have been soaring and it is a fun and positive area to work with intelligent teachers to guide you.'],
        ['Alina Akhtar', 'I would highly recommend this education centre. I received excellent support and in depth help in a areas.'],
        ['Adeel Hussain', 'Fantastic teaching to a top standard. They have really helped my child and she is now reaching the top marks in her year. Thank you so much for the support you have given. I would highly recommend them.'], 
    ];
    const testimonialsTwo = [
        ['Zain Azam', 'Started a year ago, ever since it has helped me immensely , would highly recommend!'], 
        ['Abdul Yasar', 'I started the education centre after my GCSE mocks in which i got a U in English Literature and a 6 in Mathematics, and I achieved an 8 in both in my actual GCSES and i am currently studying A-level at John Hampden Grammar School. Great teaching, friendly staff, highly recommended.'],
        ['Aisha Mahmood', 'I joined the education centre approximately 2 years ago and I\’m so pleased with the help that was given to me. I really enjoy it there and will continue attending. I would highly recommend it anyone, as there is assistance available for all abilities.'],
        ['Manaal Moin', 'Amazing experience . Met a lot of great people #comehere #greattutoring U learn a lot.'],
        ['Safa Hussain', 'Honestly great teaching. So enthusiastic and encouraging! They\'ve helped me so much to bring up my grades! Thank you for everything!'],
        ['Ayesha Mahmood', 'I\’ve been helped with my English and Maths for 3 months now and my grades have drastically improved due to the amazing quality of teaching and sevice provided.'],
        ['Alisha Rizwan', 'AMAZINGG teaching Definitely the best tutor place in Wycombe because they make sure that you understand everything.'],
        ['Mominah Mehdi', 'Great teachers who are there to support you. I can not thank them enough for their help. 100% recommend!'],
        ['Kixko', 'I couldn\'t understand circle theorems, now I do!'],
        ['Haris Mahmood', 'Good and improvment in maths!'],
        ['', ''],
        ['', ''],
    ];
    const testimonialsThree = [
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
    ];

    return (
        
        <Container maxWidth="xl" height={850}>
            <Box sx={{width:'100%', height:'85%', background:('#FFFFFF', '#E6EFFE')}}>
                <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"flex-start"}}>
                    <Typography variant="h2">Testimonials</Typography>
                </Grid>
                <Grid container padding={paddingDefault} sx={{justifyContent:"center", alignItems:"center"}}>
                    <Box sx={{width:'85%', height:"70%"}}>
                        <Box sx={{width:'100%', height:'10%', backgroundColor:'#00B7F0', justifyContent:"center", alignItems:"center"}}>
                            <Tabs value={page} onChange={changePage}>
                                <Tab label="Page 1"/>
                                <Tab label="Page 2"/>
                                <Tab label="Page 3"/>
                            </Tabs>
                        </Box>

                        <TestimonialsGrid value={page} index={0} testimonials={testimonialsOne}/>
                        <TestimonialsGrid value={page} index={1} testimonials={testimonialsTwo}/>
                        <TestimonialsGrid value={page} index={2} testimonials={testimonialsThree}/>
                    </Box>
                </Grid>
                <Grid container padding={3} sx={{justifyContent:"center", alignItems:"center"}}>
                    <Button href="https://www.google.com/maps/place/The+Education+Centre/@51.6292263,-0.7445597,17z/data=!3m1!5s0x487661cf4c290cdf:0x2ca4bb5521d273f2!4m8!3m7!1s0x487661cf4ef0c013:0x3678a48b5da8d072!8m2!3d51.6292263!4d-0.7419794!9m1!1b1!16s%2Fg%2F11f1pmrtgk?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D" width={2/3}>See More Reviews</Button>
                </Grid>
            </Box>
        </Container>
    )
};

export default function Homepage() {
    return (
        <Stack>
            <Navigation/>
            <Introduction/>
            <KeyFacts/>
            <ClassOptions/>
            <Testimonials/>
            <ContactUs/>
        </Stack>
    )
}
