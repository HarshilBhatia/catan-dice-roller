import { useState, useCallback } from 'react';
import { Button, Box } from '@mui/material';
import Dice from './Dice';
import Timer from './Timer';
import useKeyPress from '../hooks/useKeyPress';

const DiceContainer = () => {
  const [dice, setDice] = useState({ 
    dice1: 1, 
    dice2: 1, 
    dice3: 1
  });
  const [isRolling, setIsRolling] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const rollDice = useCallback(() => {
    if (isRolling) return;
    
    setIsRolling(true);
    setShowTimer(false);

    setTimeout(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      // const newDice1 = 2;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      // const newDice2 = 3;
      const newDice3 = Math.floor(Math.random() * 6) + 1;
      // const newDice3 = 3;

      console.log('rolled:', newDice1, newDice2, newDice3);
      setDice({ 
        dice1: newDice1, 
        dice2: newDice2,
        dice3: newDice3 
      });
      setIsRolling(false);
      setShowTimer(true);
    }, 1500); // Increased to match animation duration
  }, [isRolling]);

  useKeyPress(' ', rollDice);

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 4 
    }}>
      <Box sx={{ 
        display: 'flex', 
        gap: 4,
        mb: 4 
      }}>
        <Dice value={dice.dice1} isRolling={isRolling} />
        <Dice value={dice.dice2} isRolling={isRolling} />
        <Dice 
          value={dice.dice3} 
          isRolling={isRolling}
          colors={{
            1: 'black',
            6: '#2ECC71',
            2: 'black',
            4: '#F1C40F',
            3: 'black',
            5: '#3498DB'
          }}
          hidenum={true}
        />
      </Box>
      <Button 
        variant="contained"
        color="primary"
        onClick={rollDice}
        disabled={isRolling}
        sx={{
          fontSize: '1.2rem',
          minWidth: 200,
        }}
      >
        Roll Dice
      </Button>
      {showTimer && <Timer />}
    </Box>
  );
};

export default DiceContainer; 