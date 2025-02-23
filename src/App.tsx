import { Container, Typography, Box } from '@mui/material';
import DiceContainer from './components/DiceContainer';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        textAlign: 'center', 
        py: 4,
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main'
          }}
        >
          Dice Rolling Timer
        </Typography>
        <DiceContainer />
      </Box>
    </Container>
  );
}

export default App; 