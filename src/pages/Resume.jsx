import { Card, CardContent, Chip, Divider, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from '@mui/material/Unstable_Grid2';
import { HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded } from "@mui/icons-material";
import { Timeline, TimelineItem, TimelineDot, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab'
import { devEdj } from "../constants/detail";
import { useEffect, useState } from "react";
const Resume = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false)
        }
    }, []);
    return (
        <>
            <Card sx={{
                height: '100vh',
                backgroundColor: 'whitesmoke',
                overflowY: 'scroll',
            }}>
                <Helmet><title> {helmetTitle} </title></Helmet>
                <CardContent >

                    <Slide direction="down" in={loading} style={{
                        transitionDelay: loading ? "200ms" : "0ms"
                    }} >
                        <Divider
                            textAlign='canter'
                            sx={{
                                "&::before , &::after": {
                                    borderColor: 'error.main',
                                },
                                mt: 2
                            }}>
                            <Chip
                                sx={{ p: 3 }}
                                textAlign="center"
                                variant="rounded"
                                color="error"
                                icon={<SettingsEthernetRounded />}
                                label={<Typography>
                                    رزومه ی من
                                </Typography>} >

                            </Chip>

                        </Divider>
                    </Slide>

                    <Grid container sx={{ direction: 'ltr' }}>
                        <Grid xs={6}>
                            <Slide direction="down" in={loading} style={{
                                transitionDelay: loading ? "200ms" : "0ms"
                            }} >
                                <Divider
                                    textAlign='center'
                                    sx={{
                                        "&::before , &::after": {
                                            borderColor: 'error.main',
                                        },
                                        mt: 2
                                    }}>
                                    <Chip
                                        sx={{ p: 3 }}
                                        textAlign="center"
                                        variant="rounded"
                                        color="info"
                                        icon={<HomeRepairServiceRounded />}
                                        label={<Typography>
                                            تحصیلات من
                                        </Typography>} >

                                    </Chip>

                                </Divider>
                            </Slide>
                            <Timeline position='right' sx={{ direction: 'ltr' }} >

                                {devEdj.map((item, index) => (
                                    <Slide direction="up" in={loading} style={{
                                        transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                                    }}>
                                        <TimelineItem key={index} >
                                            <TimelineSeparator>
                                                <TimelineDot variant='outlined' color="info" >
                                                    <HomeRepairServiceRounded color="info" />
                                                </TimelineDot>
                                                {index !== 3 ? <TimelineConnector /> : null}
                                            </TimelineSeparator>
                                            <TimelineContent >
                                                <Typography variant="caption" color='gray'>{item.year}</Typography>
                                                <Typography variant="body1" color='black'>{item.cert}</Typography>
                                                <Typography variant="body1" color='black'>{item.major}</Typography>
                                                <Typography variant="body1" color='black'>{item.place}</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Slide>)

                                )}

                            </Timeline>
                        </Grid>
                        <Grid xs={6}
                            sm={6}
                            md={6}
                            lg={6}
                            xl={6}
                        >
                            <Slide direction="down" in={loading} style={{
                                transitionDelay: loading ? "200ms" : "0ms"
                            }} >
                                <Divider
                                    textAlign='center'
                                    sx={{
                                        "&::before , &::after": {
                                            borderColor: 'error.main',
                                        },
                                        mt: 2
                                    }}>
                                    <Chip
                                        sx={{ p: 3 }}
                                        textAlign="center"
                                        variant="rounded"
                                        color="warning"
                                        icon={<SchoolRounded />}
                                        label={<Typography>
                                            تجربیات من
                                        </Typography>} >

                                    </Chip>

                                </Divider>
                            </Slide>
                            <Timeline position='right' sx={{ direction: 'ltr' }} >
                                {devEdj.map((item, index) => (
                                    <Slide direction="up" in={loading} style={{
                                        transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                                    }}>
                                        <TimelineItem key={index} >
                                            <TimelineSeparator>
                                                <TimelineDot variant='outlined' color="warning" >
                                                    <SchoolRounded color="warning" />
                                                </TimelineDot>
                                                {index !== 3 ? <TimelineConnector /> : null}

                                            </TimelineSeparator>
                                            <TimelineContent >
                                                <Typography variant="caption" color='gray'>{item.year}</Typography>
                                                <Typography variant="body1" color='black'>{item.cert}</Typography>
                                                <Typography variant="body1" color='black'>{item.major}</Typography>
                                                <Typography variant="body1" color='black'>{item.place}</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Slide>
                                )

                                )}

                            </Timeline>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>
        </>
    )
}
export default Resume;