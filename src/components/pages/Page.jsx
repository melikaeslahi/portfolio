import { Box, Typography } from "@mui/material";

const Page = (props) => {
    const { children, pageNumber, index, ...otherProps } = props;
    return (
        <div 
        role='tabpanel'
        hidden={pageNumber !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`sidbar-tab-${index}`}
        {...otherProps}
        >
            {pageNumber === index && (
                <Box sx={{ height:'100vh'
                 }} >
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    )

}
export default Page;