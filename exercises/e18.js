import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data){
  const totalYears = {};

  for (let i = 0; i < data.asteroids.length; i++) {
    const year = data.asteroids[i].discoveryYear;
    if (!totalYears[year]) {
      totalYears[year] = 1;
    } else {
      totalYears[year]++;
    }
  }

  let greatestYear;
  let greatestCount = 0;
  for (const year in totalYears) {
    if (totalYears[year] > greatestCount) {
      greatestCount = totalYears[year];
      greatestYear = year;
    }
  }

  return greatestYear;
}

  


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function



