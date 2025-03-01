import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { RollHistory } from '../types/GameTypes';

interface StatsProps {
  rollHistory: RollHistory[];
}

const Stats = ({ rollHistory }: StatsProps) => {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Roll History
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Dice 1</TableCell>
              <TableCell>Dice 2</TableCell>
              <TableCell>Dice 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rollHistory.map((roll, index) => (
              <TableRow key={index}>
                <TableCell>{formatTime(roll.timestamp)}</TableCell>
                <TableCell>{roll.dice1}</TableCell>
                <TableCell>{roll.dice2}</TableCell>
                <TableCell>{roll.dice3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Stats;