import { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import ReCAPTCHA from "react-google-recaptcha";
import {
    Divider,
    Chip,
    Typography,
    Card,
    CardContent,
    Slide,
    TextField,
    InputAdornment,
    CardActions,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
    AccountCircle,
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

import worldMap from "../assets/map.svg";
import { useFormik } from "formik";
import { contactValidtionsScheme } from "../validations/contactValidations";

const Contact = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    const initContact={
        fullname:'',
        message:'',
        email:'',
        subject:'',
        recaptcha:''
    }
    const formik = useFormik({
        initialValues:initContact,
        validationSchema:contactValidtionsScheme,
        onSubmit:(values)=>{
            console.log('value form :' ,values);
        }
    })

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Divider
                    textAlign="center"
                    sx={{
                        mt: 2,
                        "&::before, &::after": {
                            borderColor: "warning.main",
                        },
                    }}
                >
                    <Chip
                        icon={<AccountCircle />}
                        color="warning"
                        label={
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{ textAlign: "center" }}
                            >
                                ارتباط با من
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>

                <Grid container sx={{ mt: 5 }}>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid xs={12} sx={12} md={8}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <form onSubmit={formik.handleSubmit} autoComplete="off">
                                    <CardContent>
                                        <Grid container>
                                            <Grid
                                                xs={12}
                                                sx={{ direction: "ltr" }}
                                            >
                                                <Grid container spacing={2}>
                                                    <Grid xs={12} md={6}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="نام و نام خانوادگی"
                                                            name="fullname"
                                                            onChange={formik.handleChange}
                                                            helperText={
                                                                formik.touched.fullname ? 
                                                                formik.errors.fullname : null
                                                            }
                                                            error={
                                                                Boolean(formik.touched.fullname && formik.errors.fullname)   
                                                            }
                                                            value={formik.values?.fullname}
                                                            variant="outlined"
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment postion="end">
                                                                        <Face6Rounded />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={12} md={6}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="آدرس ایمیل"
                                                            name="email"
                                                            onChange={formik.handleChange}
                                                            helperText={
                                                                formik.touched.email ? 
                                                                formik.errors.email : null
                                                            }
                                                            error={
                                                                Boolean(formik.touched.email && formik.errors.email)   
                                                            }
                                                            value={formik.values?.email}
                                                            variant="outlined"
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment postion="end">
                                                                        <EmailRounded />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={12} md={12}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            color="warning"
                                                            label="عنوان"
                                                            name="subject"
                                                            onChange={formik.handleChange}
                                                            helperText={
                                                                formik.touched.subject ? 
                                                                formik.errors.subject : null
                                                            }
                                                            error={
                                                                Boolean(formik.touched.subject && formik.errors.subject)   
                                                            }
                                                            value={formik.values?.subject}
                                                            variant="outlined"
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment postion="end">
                                                                        <SubjectRounded />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={12} md={12}>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            rows={6}
                                                            size="small"
                                                            color="warning"
                                                            label="متن پیام"
                                                            name="message"
                                                            onChange={formik.handleChange}
                                                            helperText={
                                                                formik.touched.message ? 
                                                                formik.errors.message : null
                                                            }
                                                            error={
                                                                Boolean(formik.touched.message && formik.errors.message)   
                                                            }
                                                            value={formik.values?.message}
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            alignItems: "end",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <ReCAPTCHA  
                                          sitekey="6LchDKQlAAAAALkcBDgd-tX6xAZnc4ekMb4-J-Cn"
                                          hl="fa"
                                          theme={theme.palette.mode}
                                          onChange={value=>{
                                            formik.setFieldValue("recaptcha" , value)
                                          }}

                                        />
                                        <Button
                                            type="submit"
                                            color="success"
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                            fullWidth
                                        >
                                            ارسال کن
                                        </Button>
                                    </CardActions>
                                </form>
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid
                            xs={0}
                            sm={0}
                            md={4}
                            sx={{
                                textAlign: "center",
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="black"
                                sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                بیا در مورد همه چیز باهم صحبت کنیم
                            </Typography>
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                👋{" "}
                                <a
                                    href="mailto:younes.gh@chmail.ir"
                                    alt="email"
                                    style={{
                                        color: "tomato",
                                    }}
                                >
                                    ایمیل
                                </a>{" "}
                                بزن به من
                            </Typography>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Contact;
