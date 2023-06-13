import { Stack, Typography, Button, Image, Box, Container, Input, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#232742',
    //   dark: "linear-gradient(#FF693E, #FF5476)",
    // dark: 'red',
      contrastText: '#fff',
      '&:hover': {
        main: 'red',
      }
    },
  },
});

const NewsLetterForm = ({state, setState}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/
        if (emailRegex.test(email)) {
            setState("submitted", email)
        } else {
           setEmailError(true); 
           setErrorMessage("Valid email required");
        }
    }

    const ListItem = ({text}) => {
        return (
            <Stack direction="row" spacing={2} margin="10px 0"> 
                <Box 
                    component="img" src={require('../assets/images/icon-list.svg').default} 
                    height="auto"
                    width="20px"
                />
                <Typography variant='body1'>{text}</Typography>
            </Stack>
        )
    }

    const handleEmailChange = (e) => {
       setEmailError(false);
       setErrorMessage("")
       setEmail(e.target.value);
    }

    return (
        <Stack
            direction="row"
            spacing={5}
            display="flex"
            padding="20px"
            sx={{
                background: "#FFFFFF",
                borderRadius: "20px"

            }}
        >
            <Box maxHeight alignItems="center" display="flex" maxWidth="500px">
                <Stack spacing={4} margin="0 30px">
                    <Typography variant='h2' sx={{fontWeight: "bold"}}>Stay updated!</Typography>
                    <Typography variant='h6'>join 60,000+ product managers reciving monthly updates on: </Typography>
                    <Box>
                        <ListItem  text="Prodcut discovery and building what matters" />
                        <ListItem  text="Measuring to ensure updates are a success" />
                        <ListItem  text="And much more!" />
                    </Box>
                    <FormControl>
                        <Stack spacing={1}>
                            <Box display='flex' justifyContent="space-between">
                                <Typography variant='paragraph' fontWeight="bold">Email address</Typography>
                                <Typography variant='paragraph' color="error">{errorMessage}</Typography>
                            </Box>
                            <TextField variant="outlined" placeholder='email@company.com' onChange={handleEmailChange} error={emailError} required/>
                        </Stack>
                    </FormControl>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' background="red" onClick={handleSubmit} color="neutral"
                            sx={{
                                background: '#232742',
                                height: '50px',
                                transition: 'all 0s',
                                borderRadius: '10px',
                                '&:hover' :{background: "linear-gradient(to left, #FF693E, #FF5476)"}, }}
                        >Submit</Button>
                    </ThemeProvider>
                </Stack>
            </Box>
            <Box 
                component="img"
                src={require('../assets/images/illustration-sign-up-desktop.svg').default}
                alt=''

            />
        </Stack>
    );
};

export default NewsLetterForm;