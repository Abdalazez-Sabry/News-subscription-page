import { Box, Typography, Stack, Button } from '@mui/material'

const SuccessMessage = ({setState, email}) => {
    const handleDismissMessage = () => {
        setState("submitting")
    }
    return (
        <Box maxHeight alignItems="center" display="flex" maxWidth="500px">
            <Stack 
                spacing={4} margin="0 30px"
                display="flex"
                padding="60px"
                sx={{
                    background: "#FFFFFF",
                    borderRadius: "20px"

                }}
            >
                <Box 
                    component="img" src={require('../assets/images/icon-list.svg').default} 
                    height="auto"
                    width="60px"
                    />
                <Typography variant='h2' fontWeight="bold">Thanks for subscribing!</Typography>
                <Typography variant='paragraph'>A confirmation email has been sent to {email}. Please open it and click the buttin inside to confirm your subscription.</Typography>
                <Button variant='contained' background="red" onClick={handleDismissMessage}
                    sx={{
                        background: '#232742',
                        height: '50px',
                        transition: 'all 0s',
                        borderRadius: '10px',
                        '&:hover' :{background: "linear-gradient(to left, #FF693E, #FF5476)"}, }}
                >
                    Dismiss message
                </Button>
            </Stack>
        </Box>
    );
};

export default SuccessMessage;