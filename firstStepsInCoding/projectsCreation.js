function projectsCreation(input) {
    let name = input[0];
    let a = 3;
    let hours = input[1] * a;
    let count = input[1];
    console.log(`The architect ${name} will need ${hours} hours to complete ${count} project/s.`)
}
projectsCreation(['Daniel',10])