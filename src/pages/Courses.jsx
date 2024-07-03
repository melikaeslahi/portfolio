import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from '@mui/material/Unstable_Grid2';
import { SchoolRounded } from "@mui/icons-material";
 
import { useEffect, useState } from "react";
import { courses } from "../constants/courses";
import EllipsisText from 'react-ellipsis-text';
const Courses = ({ helmetTitle }) => {
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
                            textAlign='center'
                            sx={{
                                "&::before , &::after": {
                                    borderColor: 'info.main',
                                },
                                mt: 2,
                                mb:2
                            }}>
                            <Chip
                                sx={{ p: 3 }}
                                textAlign="center"
                                variant="rounded"
                                color="info"
                                icon={<SchoolRounded />}
                                label={<Typography>
                                    دوره های من
                                </Typography>} >

                            </Chip>

                        </Divider>
                    </Slide>

                    <Grid container sx={{ direction: 'rtl' }}>

                        {courses.map((course, index) => (
                            <Grid key={index} xs={12} sm={6} md={6} lg={4} xl={4} sx={{ px: 2, mb: 2 }} >
                                <Slide direction="up" in={loading} style={{
                                    transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                                }} >
                              <Card sx={{backgroundColor:'steelblue', minWidth:345}}>
                               <CardActionArea >
                                 <CardMedia  
                                           component='img'
                                           alt={course.title}
                                           width='200'
                                           height='200'
                                           image={course.image}
                                />
                                    <CardContent >
                                        <Typography variant="body1" textAlign="left" gutterBottom> {course.title} </Typography>
                                        <Typography variant="body2" textAlign="left" color="text.secondary"  gutterBottom> 
                                        <EllipsisText text= {course.info} length={"100"} />
                                         </Typography>

                                    </CardContent>
                                
                               </CardActionArea>
                                <CardActions>
                                    <Button  href={course.link} size='small' color='primary' target="_blank">
                                   اطلاعات بیشتر
                                   </Button>
                                </CardActions>
                              </Card>
                                </Slide>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default Courses;