const table = require('./MPNtable.json');
const data = table.data;

const mpnIndex = table.fields.indexOf('MPN Index/100mL');
const combinationIndex = table.fields.indexOf('Combination of Positives');
const lowIndex = table.fields.indexOf("Confidence Limit LOW");
const highIndex = table.fields.indexOf("Confidence Limit HIGH");

const mpnFinder = (input) => {
    const mpn = data.find(x => x[combinationIndex] === input)[mpnIndex];
    if (mpn === undefined) {
        return "ERROR - COMBINATION PROVIDED IS NOT ON TABLE";
    } else return mpn;
};

