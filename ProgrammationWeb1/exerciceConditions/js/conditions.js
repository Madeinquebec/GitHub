
/* Exercice 1 */
/*
var var1 = "Je suis une chaine de caractères";
var var2 = " concaténéé à partir de plusieurs ";
var var3 = "sous-chaines contenues dans var1, var2, et var3.";

var texteComplet;

texteComplet = var1 + var2 + var3;

if (texteComplet.length >= 100) {
    alert("C'est une grande phrase")
} else {
    alert("C'est une petite phrase")
}
*/


/* Exercice 2 */

/*
var quantity = 2, unit = "k", result;
result = quantity * 1024;
console.log(result);
*/

/* Exercice 3 */
/*
var shortenBytes = "150K";

var letter = shortenBytes.substr(0, 3);

var bytes;

switch (letter) {
    case 150k:
        bytes = letter * 1024;
    break;

    default;
        console.log();
}
*/


/* Exercice 4 */

var value = 2;

if (value === "0" || value === "1" || value === "2") {
    console.log("La valeur est une chaine de caractère");
} else {
    console.log("La valeur est un nombre");
}

switch (value) {
    case "2":
    case 2:
        console.log("La valeur est supérieur à 1");
        console.log("La valeur est supérieur à 0");
        break;

    case "1":
    case 1:
        console.log("La valeur est supérieur à 0");
        break;

    case "0":
    case 0:
        console.log("La valeur est égale à 0");
        break;

    default:
        console.log("Ce n'est pas une valeur valide");
}


/* Exercice 5 */

var misteryNumber = 3;
var myNumber = 3;

