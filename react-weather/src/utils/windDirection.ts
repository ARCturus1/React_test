interface DirectionData {
  [direction: string]: [number, number]; // Index signature for direction names
}

const directions: DirectionData = {
  N: [338, 22],   // Special case: wraps around 0
  NE: [23, 67],
  E: [68, 112],
  SE: [113, 157],
  S: [158, 202],
  SW: [203, 247],
  W: [248, 292],
  NW: [293, 337]
};

export function getWindDirection(degrees: number): string {
  const wrappedDegrees = (degrees % 360 + 360) % 360; // Now always 0–359

  for (const direction in directions) {
    const [start, end] = directions[direction];

    if (start <= end) {
      // Normal range (e.g., NE: 23–67)
      if (wrappedDegrees >= start && wrappedDegrees <= end) {
        return direction;
      }
    } else {
      // Wrap-around range (e.g., N: 338–22 means 338–359 and 0–22)
      if (wrappedDegrees >= start || wrappedDegrees <= end) {
        return direction;
      }
    }
  }

  return 'Unknown';
}

export default getWindDirection;

/**
 * Test cases for the getWindDirection function.
 */
// (() => {
//   console.log('Test Cases:');
//   console.log(`- 0 degrees: ${getWindDirection(0)} (Expected: N)`);
//   console.log(`- 45 degrees: ${getWindDirection(45)} (Expected: NE)`);
//   console.log(`- 90 degrees: ${getWindDirection(90)} (Expected: E)`);
//   console.log(`- 180 degrees: ${getWindDirection(180)} (Expected: S)`);
//   console.log(`- 270 degrees: ${getWindDirection(270)} (Expected: W)`);
//   console.log(`- 360 degrees: ${getWindDirection(360)} (Expected: N)`);
//   console.log(`- 355 degrees: ${getWindDirection(355)} (Expected: N)`);
//   console.log('End of Test Cases.');
// })();
