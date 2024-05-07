function isValidDNA(dna) {
   if (dna === "") {
        return false;
    }

    var check = CTAG;
    if (check.test(dna) && dna === dna.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

// Ejemplos de uso:
console.log(isValidDNA("CTAG")); // debería devolver true
console.log(isValidDNA("CTXG")); // debería devolver false debido a 'X'
console.log(isValidDNA("ctag")); // debería devolver false debido a minúsculas
console.log(isValidDNA("")); // debería devolver false para cadena vacía
