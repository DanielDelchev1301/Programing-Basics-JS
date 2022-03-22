function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let cost = 0;
    let overnight;

    
    if (budget <= 100) {
        destination = 'Bulgaria';
        switch(season) {
            case 'summer':
                cost = budget * 0.3;
                overnight = 'Camp';
            break;
            case 'winter':
                cost = budget * 0.7;
                overnight = 'Hotel';
            break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';
        switch(season) {
            case 'summer':
                cost = budget * 0.4;
                overnight = 'Camp';
            break;
            case 'winter':
                cost = budget * 0.8;
                overnight = 'Hotel';
            break;
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        cost = budget * 0.9;
        overnight = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${overnight} - ${cost.toFixed(2)}`);
}
journey(['50','summer']);