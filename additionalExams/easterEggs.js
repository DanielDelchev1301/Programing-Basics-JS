function easterEggs(input) {
    let eggs = Number(input[0]);
    let index = 1;
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let mostEggs = '';

    for (let i = 1; i <= eggs; i++) {
        let current = input[index];
        index++;

        switch(current) {
            case 'red': red++; break;
            case 'orange': orange++; break;
            case 'blue': blue++; break;
            case 'green': green++; break;
        }

        if (red > max) {
            max = red;
            mostEggs = 'red';
        } else if (orange > max) {
            max = orange;
            mostEggs = 'orange';
        } else if (blue > max) {
            max = blue;
            mostEggs = 'blue';
        } else if (green > max) {
            max = green;
            mostEggs = 'green';
        }
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${max} -> ${mostEggs}`);
}
easterEggs(['7','orange','blue','green','green','blue','red','green']);