import { Typography, Box } from "@mui/material"
import Content from './componenets/Content'

const App = () => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#36384D',
        }}>
            <Content />
        </Box>
    )
}

export default App