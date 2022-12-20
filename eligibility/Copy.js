let person = {
    employee:{
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
    }  
}

const employee={
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
    } 

// const person1 = {...person};
const person1 = JSON.parse(JSON.stringify(employee))
person1.ename='prashant';
console.log(employee);
console.log(person1)

