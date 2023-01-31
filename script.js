//5
let personsArr = [
    {
        name: "nina",
        age: 20,
    },
    {
        name: "gio",
        age: 25,
    },
    {
        name: "salome",
        age: 40,
    }
];

const findArrPerson = (list, name) => {
    console.log(list);
    const findPerson = list.find((item) => item.name === name);
    return findPerson;
}

const firstName = "nina";
const person = findArrPerson (personsArr, firstName);
console.log(person);

//6
function calcExpense(income, expense) {
    const profit = income - expense;
    return profit;
  }

const jan = calcExpense(100, 20); 
const feb = calcExpense(300, 150); 
const mar = calcExpense(100, 80);
const sumOfProfit = [jan , feb , mar];

const getSum =  () => {
    let sum = 0 ;
    for (let index = 0; index < sumOfProfit.length; index++) {
    const element = sumOfProfit[index];
    sum = sum + element;   
}
console.log(sum);
};

getSum();

//4
const filterEvenNumbers = numbers.filter((number) => number % 2 === 0);
//const filterOddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(filterEvenNumbers);



