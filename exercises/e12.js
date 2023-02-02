import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  //  Your code here .........
const totalMoons = data.planets.reduce((total , cur) => {
     if(cur.moonsCount && !isNaN(cur.moonsCount)) {
      return total + cur.moonsCount ;
     }
     return total ;
}, 0 );
return totalMoons ;
}
console.log(allPlanetsMoonsCount(data));



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
 