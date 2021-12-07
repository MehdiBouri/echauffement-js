let fonction = [];




fonction[1] = function()
{
    return true;
}

fonction[2] = function(txt)
{
    return txt;
}

fonction[3] = function(txt1, txt2)
{
    return txt1 + txt2;
}

fonction[4] = function(i, j)
{
    if (i > j) {
        return "Le premier nombre est plus grand";
    }
    else if (i < j) {
        return "Le premier nombre est plus petit";
    }
    else {
        return "Les deux nombres sont identiques";
    }
}

fonction[5] = function(i, txt)
{
    return i + txt;
}

fonction[6] = function(nom, prenom, age)
{
    return "Bonjour" + nom + prenom + ", tu as " + age + "ans";
}

fonction[7] = function(age, genre)
{
    let txt = '';

    if (genre = "Homme") {
        txt = "Vous êtes un homme";
    }
    else {
        txt = "Vous êtes une femme";
    }

    if (age < 18) {
        txt += " et vous êtes mineur";
    }
    else {
        txt += " et vous êtes majeur";
    }

    return txt;
}


fonction[8] = function(i = 7, j = 3, k = 5)
{
    return i + j + k;
}