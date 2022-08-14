
function F_C(F_number){
    return (F_number - 32) * 5/9
}

let F_number = Number(prompt('Insert fahrenheit number: '))
let result = F_C(F_number)
console.log(result)