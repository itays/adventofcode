let inputs = ["R2, L3", "R2, R2, R2", "R5, L5, R5, R3"];

inputs.forEach((input) => {
  const sequences = input.split(", ");
  console.log(sequences);
  sequences.forEach((sequence) => {
    const dir = sequence[0];
    const blocks = sequence[1];
    console.log(dir, blocks);
  });
});
