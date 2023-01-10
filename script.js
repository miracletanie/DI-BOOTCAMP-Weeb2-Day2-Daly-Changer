// Prompt the user for a number to begin counting down bottles.
let value = prompt("Enter a number");

if (!isNaN(value)) {

    let inc = 0;
    let numberboot = 0;
    for (let i = 0; i < value; i++) {
                
        inc++;
        if (i == 0) {
            numberboot = value;
            console.log(`${numberboot} ${numberboot>1 ? 'bottles' : 'bottle'} of beer on the wall`);
            console.log(`Take ${(inc)} down, pass them around`);
        } else {
            numberboot = numberboot - i;
            console.log(`${numberboot} ${numberboot>1 ? 'bottles' : 'bottle' } of beer on the wall`);
            ((i+1)<numberboot) ? console.log(`Take ${(i+1)} down, pass them around`) : console.log("no bottle of beer on the wall");
        }

        // stop song
        if ((i+1)>numberboot) {
            break;
        }
    }
}