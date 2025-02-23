import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import useTimer from '../hooks/useTimer';

const Timer = () => {
  const { time, startTimer, resetTimer, addTime } = useTimer(180);

  useEffect(() => {
    resetTimer();
    startTimer();
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{
      mt: 4,
      p: 2,
      bgcolor: 'background.paper',
      borderRadius: 1,
      minWidth: 120,
      boxShadow: 1
    }}>
      <Typography 
        variant="h4" 
        component="div"
        sx={{ color: time <= 60 ? 'error.main' : 'text.primary' }}
      >
        {formatTime(time)}
      </Typography>
      <Button 
        size="small" 
        onClick={() => addTime(60)} 
        sx={{ mt: 1 }}
      >
        +1 min
      </Button>
    </Box>
  );
};

export default Timer; 