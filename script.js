const table = require('./MPNtable.json');
const data = table.data;
const mpnIndex = table.fields.indexOf('MPN Index/100mL');
const combinationIndex = table.fields.indexOf('Combination of Positives');
const lowIndex = table.fields.indexOf("Confidence Limit LOW");
const highIndex = table.fields.indexOf("Confidence Limit HIGH");


const submitButton = document.getElementById('submit-button');

const mpnFinder = (input) => {
    let mpn
    for (i=0; i < data.length; i++){
      let item = data[i];
      for (j=0; j < item.length; j++) {
        //console.log(item);
        if (item[combinationIndex] === input) {
          console.log(item);
          let mpn = item[mpnIndex];
          return mpn;
        }
      }
    }
    if (mpn === undefined) {
        return "ERROR - COMBINATION PROVIDED IS NOT ON TABLE";
    } else return mpn;
};


submitButton.onclick = function() {

  const first = document.getElementById('result-one').value;
  const second = document.getElementById('result-two').value;
  const third = document.getElementById('result-three').value;
  let combinationOfPositives = `${first}-${second}-${third}`

  result = mpnFinder(combinationOfPositives);

  document.getElementById("response").innerHTML = `MPN is: ${result}`;
}
