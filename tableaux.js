let mois = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout',
    'septembre', 'octobre', 'novembre', 'décembre'
];

console.log(mois[2]);

console.log(mois[5]);

mois[7] = 'août';



departements = {
    2: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-calais', 80: 'Somme'
}

console.log(departements[59]);

departements[51] = 'Marne';



for(var m in mois) {
    console.log(mois[m]);
}

for(var d in departements) {
    console.log(departements[d]);
}

for(var d in departements) {
    console.log("Le département " + departements[d] + " a le numéro " + d);
}