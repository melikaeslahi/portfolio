import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Avatar, Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import image from '../assets/profile.jpg';
import {Skill ,DevInfo} from "../components/pages";
import { devSkills } from "../constants/skills";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
const Aboute = ({helmetTitle}) => {
    const { htmlSkill, reactSkill, nodeSkill, cssSkill, gitSkill, jsSkill, phpSkill } = devSkills;

    const [html, setHtml] = useState(0);
    const [javascript, setJavascript] = useState(0);
    const [react, setReact] = useState(0);
    const [node, setNode] = useState(0);
    const [css, setCss] = useState(0);
    const [git, setGit] = useState(0);
    const [php, setPhp] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 82)
            });

            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50)
            });

            setReact((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60)
            });

            setNode((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 5)
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 90)
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 0)
            });

            setPhp((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60)
            });

        }, 200);
        return () => {
            clearInterval(timer);
        }
    }, []);
    return (
        <Card sx={{
            height: '100vh',
            backgroundColor: 'whitesmoke',
             overflowY:'scroll',
        }}>
             <Helmet><title> {helmetTitle} </title></Helmet>
            <CardContent >
                <Grid container sx={{ mx: 3 }}>
                    <Grid
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <Divider textAlign='right' sx={{
                            "&::before , &::after": {
                                borderColor: 'primary.main'
                            }
                        }} >
                            <Chip color='primary' icon={<CodeRounded />} label={
                                <Typography color='black' variant="body1" sx={{ textAlign: 'center' }} >توسعه دهنده ی فول استک و برنامه نویس </Typography>
                            } sx={{ p: 3 }} />
                        </Divider>

                        <DevInfo > نام و نام خانوادگی : ملیکا اصلاحی </DevInfo>
                        <DevInfo >    سن  : 30     </DevInfo>
                        <DevInfo >  melika.eslahi@gmail.com : آدرس ایمیل </DevInfo>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}  >
                        <Avatar src={image} variant="rounded"
                            sx={{
                                height: 250,
                                width: 250,
                                margin: '0 auto',
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block',
                                    lg: 'block',
                                    xl: 'block'
                                }
                            }} >ME</Avatar>

                    </Grid>
                    <Grid sx={{ width: 1, mt: 1 }} >
                        <Divider
                            textAlign='canter'
                            sx={{
                                "&::before , &::after": {
                                    borderColor: 'secondary.main',
                                },
                                mt: 2
                            }}>
                            <Chip
                                sx={{ p: 3 }}
                                textAlign="center"
                                variant="rounded"
                                color="secondary"
                                icon={<SelfImprovementRounded />}
                                label={<Typography>
                                    مهارت های من
                                </Typography>} >

                            </Chip>

                        </Divider>
                        <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
                        <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={react} />
                        <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={node} />
                        <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
                        <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
                        <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} />
                        <Skill name={phpSkill.name} icon={phpSkill.icon} color={phpSkill.color} value={php} />


                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Aboute;