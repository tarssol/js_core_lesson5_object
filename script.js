//part1
let user = {};

user.name = 'Пилип';
user.surname = 'Шевченко';

user.name = 'Сергій';

delete user.name;

console.log(user);



//part2
let EmployeeSalaries = {
    Taras: 25847,
    Ksenya: 27926,
    Vitalyi: 23200,
    Max: 24435,
    Kate: 26743,
};

let sum = 0;

for(let a in EmployeeSalaries){
    sum += EmployeeSalaries[a];
    console.log(EmployeeSalaries[a], sum);
}

console.log(`Сума всіх зарплат: ${sum}`);

