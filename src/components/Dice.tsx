import { motion } from 'framer-motion';
import styles from '../styles/Dice.module.css';

interface DiceProps {
  value: number;
  isRolling: boolean;
  colors?: Record<number, string>;
  hidenum?: boolean;
}

const Dice = ({ value, isRolling, colors, hidenum }: DiceProps) => {
  const getFaceColor = (faceValue: number) => {
    if (!colors) return 'white';
    if (hidenum) return colors[faceValue];
  };

  const getFaceContentColor = (faceValue: number) => {
    if (!colors) return 'black';
    if (hidenum) return 'black';
    return colors[faceValue] ? 'white' : 'black';
  };

  // Randomize final rotation based on the value
  const getFinalRotation = () => {
    const rotations = {
      1: [0, 0, 0],       // Front face (no rotation)
      2: [90, 0, 0],      // Bottom face (90° around X)
      3: [0, -90, 0],     // Right face (-90° around Y)
      4: [0, 90, 0],      // Left face (90° around Y)
      5: [-90, 0, 0],     // Top face (-90° around X)
      6: [180, 0, 0]      // Back face (180° around X)
    };
    return rotations[value] || [0, 0, 0];
  };

  const rollVariants = {
    rolling: {
      rotateX: [0, 360, 720, 1080],
      rotateY: [0, 360, 720, 1080],
      rotateZ: [0, 360, 720, 1080],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 1]
      }
    },
    stop: {
      rotateX: getFinalRotation()[0],
      rotateY: getFinalRotation()[1],
      rotateZ: getFinalRotation()[2],
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Create dot patterns for each face
  const getDots = (num: number) => {
    if (hidenum) return null;
    
    // Define positions using the grid-area names (a through i)
    const positions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    
    // Map each dice number to the grid areas that should have dots
    const dotPositions = {
      1: ['e'],                    // Center
      2: ['c', 'g'],              // Top-right, bottom-left
      3: ['c', 'e', 'g'],         // Top-right, center, bottom-left
      4: ['a', 'c', 'g', 'i'],    // Corners
      5: ['a', 'c', 'e', 'g', 'i'], // Corners + center
      6: ['a', 'c', 'd', 'f', 'g', 'i'], // Left side, right side
    };

    return positions.map((pos) => {
      const shouldShowDot = dotPositions[num]?.includes(pos);
      return shouldShowDot ? <div key={pos} className={styles.dot} style={{ gridArea: pos }} /> : null;
    });
  };

  return (
    <div className={styles.perspective}>
      <motion.div 
        className={styles.dice}
        animate={isRolling ? "rolling" : "stop"}
        variants={rollVariants}
      >
        <div className={`${styles.face} ${styles.front}`} style={{ backgroundColor: getFaceColor(1) }}>
          <div className={`${styles.dots} ${styles['dots-1']}`} style={{ color: getFaceContentColor(1) }}>
            {getDots(1)}
          </div>
        </div>
        <div className={`${styles.face} ${styles.back}`} style={{ backgroundColor: getFaceColor(6) }}>
          <div className={`${styles.dots} ${styles['dots-6']}`} style={{ color: getFaceContentColor(6) }}>
            {getDots(6)}
          </div>
        </div>
        <div className={`${styles.face} ${styles.right}`} style={{ backgroundColor: getFaceColor(3) }}>
          <div className={`${styles.dots} ${styles['dots-3']}`} style={{ color: getFaceContentColor(3) }}>
            {getDots(3)}
          </div>
        </div>
        <div className={`${styles.face} ${styles.left}`} style={{ backgroundColor: getFaceColor(4) }}>
          <div className={`${styles.dots} ${styles['dots-4']}`} style={{ color: getFaceContentColor(4) }}>
            {getDots(4)}
          </div>
        </div>
        <div className={`${styles.face} ${styles.top}`} style={{ backgroundColor: getFaceColor(5) }}>
          <div className={`${styles.dots} ${styles['dots-5']}`} style={{ color: getFaceContentColor(5) }}>
            {getDots(5)}
          </div>
        </div>
        <div className={`${styles.face} ${styles.bottom}`} style={{ backgroundColor: getFaceColor(2) }}>
          <div className={`${styles.dots} ${styles['dots-2']}`} style={{ color: getFaceContentColor(2) }}>
            {getDots(2)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dice; 