function ecrire(txt) {
    console.log(txt);
}

let exercice = [];




exercice[1] = function()
{
    for (a = 0; a <= 10; a++) {
        ecrire(a);
    }
}

exercice[2] = function()
{
    let a = 0;
    let b = 100;

    while(a <= 20) {
        ecrire(a * b);
        a++;
    }
}

exercice[3] = function()
{
    let a = 100;
    let b = 100;

    while(a > 10) {
        ecrire(a * b);
        a--;
    }
}

exercice[4] = function()
{
    for (a = 1; a < 10; a = a + (a / 2)) {
        ecrire(a);
    }
}

exercice[5] = function()
{
    for (a = 1; a <= 15; a++) {
        ecrire(a + " On y arrive presque...");
    }
}

exercice[6] = function()
{
    for (a = 20; a >= 0; a--) {
        ecrire(a + " C'est presque bon...");
    }
}

exercice[7] = function()
{
    for (a = 1; a <= 100; a = a + 15) {
        ecrire(a + " On tient le bon bout...");
    }
}

exercice[8] = function()
{
    for (a = 200; a >= 0; a = a - 12) {
        ecrire(a + " Enfin !!!");
    }
}
