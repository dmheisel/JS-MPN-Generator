const data = mpnTable;
const combinationIndex = 0;
const mpnIndex = 1;
const lowIndex = 2;
const highIndex = 3;

const submitButton = document.getElementById('submit-button');

const mpnFinder = (input) => {
  let mpn;
  for (i = 0; i < data.length; i++) {
    if (data[i][combinationIndex] === input) {
      mpn = data[i][mpnIndex];
    };
  }
  if (mpn === undefined) {
    console.log("ERROR - Combination provided not on table.")
  } else {
    return mpn;
  };
};

submitButton.onclick = () => {

  const first = document.getElementById('result-one').value;
  const second = document.getElementById('result-two').value;
  const third = document.getElementById('result-three').value;
  let combinationOfPositives = `${first}-${second}-${third}`

  result = mpnFinder(combinationOfPositives);

  document.getElementById("response").innerHTML = `MPN is: ${result}`;
}
