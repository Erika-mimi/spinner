//add 2 spaces so that it's easy to see 
const spin = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ',];
//How many time x wants to iterate
const iteration = 20;
//Important!! Without this, it won't repeat! Make sure to increment the delay
let delay = 0;
//Nested loop
for (let x = 0; x < iteration; x++) {
  //here for (let char of spin) also works!
 for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write(spin[i]);
  }, delay);
  //Make sure to add 200ms every iteration. Originally I was doing "200 * i" but it didn't iterate becuase the parent loop was also counting 200ms at the same time.
  delay = delay + 200;
}
};
