/* Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies */

const emptyArray = [];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.length);

console.log(
  numbers[0],
  numbers[Math.floor(numbers.length / 2)],
  numbers[numbers.length - 1]
);

const mixedDataTypes = [1, "two", true, { three: 3 }, [4, "five"]];

console.log(mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

const indexOracle = itCompanies.indexOf("Oracle");

const someCompanies = itCompanies.slice(0, indexOracle);

const restCompanies = itCompanies.slice(indexOracle);

console.log(
  someCompanies.join(", ") +
    ", " +
    restCompanies.join(" And ") +
    " are big IT companies."
);

const company = "Google";

if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log("Company is not found");
}

const companiesWithTwoOs = [];

for (let i = 0; i < itCompanies.length; i++) {
  if (
    itCompanies[i].split("o").length > 2 ||
    itCompanies[i].split("O").length > 2
  ) {
    companiesWithTwoOs.push(itCompanies[i]);
  }
}

console.log(companiesWithTwoOs);

//console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

console.log(itCompanies.slice(Math.floor(itCompanies.length / 2)));

itCompanies.shift();

console.log(itCompanies);

itCompanies.splice(Math.floor(itCompanies.length / 2), 1);

console.log(itCompanies);

itCompanies.pop();

console.log(itCompanies);

itCompanies.splice(0);

console.log(itCompanies);
