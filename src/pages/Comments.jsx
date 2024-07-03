import { Avatar, Box, Card, CardContent, Chip, Divider, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
// import Grid from '@mui/material/Unstable_Grid2';
import { SchoolRounded } from "@mui/icons-material";

import { useEffect, useState } from "react";
import { comments } from '../constants/comments'
import Slider from "react-slick";


const Comments = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);
    const options={
        dots: true,
        infinite: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",
     
    }
  
   
    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false)
        }
    }, []);
    return (
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
                                borderColor: 'success.main',
                            },
                            mt: 2,
                            mb: 2
                        }}>
                        <Chip
                            sx={{ p: 3 }}
                            textAlign="center"
                            variant="rounded"
                            color="success"
                            icon={<SchoolRounded />}
                            label={<Typography>
                                نظرات دانشجویان
                            </Typography>} >

                        </Chip>

                    </Divider>
                </Slide>

                <Box component='div' sx={{
                    mt: 2, justifyContent: "center",
                    alignItems: "center"
                }}>
                 <Slider {...options}>
                 {comments.map((comment, index) => (
                        <Box component="div" key={index} sx={{ m: 1, backgroundColor: 'whitesmoke', justifyContent: "center" }}>
                            <Avatar variant="rounded" src={comment.avatar} sx={{
                                height: 100,
                                width: 100,
                                margin: "0 auto",
                            }}
                            >
                                co
                            </Avatar>
                            <Card sx={{ m: 1, backgroundColor: 'whitesmoke', justifyContent: "center" }}>
                                <CardContent>
                                    <Typography variant="body1" color='gray' >{comment.fullname}</Typography>
                                    <Typography variant="body2" color='gray'>{comment.jobTitle}</Typography>
                                    <Typography variant="body1" color='black'>{comment.comment}</Typography>

                                </CardContent>
                            </Card>

                        </Box>
                    ))}</Slider>   
                    
                </Box>
            </CardContent>
        </Card>

    )
}
export default Comments;