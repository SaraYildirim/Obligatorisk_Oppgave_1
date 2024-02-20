let alleBilletter = []; /*For å lagre kinobilletter*/

function kjopBillett(){ /*Funksjon som kalles når man trykker på 'Kjøp billett'-knappen. Den henter verdier fra inpulfeltene*/
    let inputFilmer = document.getElementById("ulikeFilmer").value;
    let inputAntall = document.getElementById("antall").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTelefonnr = document.getElementById("telefonnr").value;
    let inputEpost = document.getElementById("epost").value;

    const kinoBillett = { /*Oppretter et objekt basert på verdiene fra inputfeltene*/
        film : inputFilmer,
        antall : inputAntall,
        fornavn : inputFornavn,
        etternavn : inputEtternavn,
        telefonnr : inputTelefonnr,
        epost : inputEpost
    };
    if (kinoBillett.film === ""){
        document.getElementById("skrivNoeFilm").innerHTML = "Må velge en film";
    }
    else {
        document.getElementById("skrivNoeFilm").innerHTML = "";
    }

    if (kinoBillett.antall === ""){ /*'condition statements' for å opprette inputvalideringer for inputfeltene, som utløses dersom et inputfelt er tomt*/
        document.getElementById("skrivNoeAntall").innerHTML = "Må skrive noe i antall";
    }
    else{
        document.getElementById("skrivNoeAntall").innerHTML = "";
    }
    if (kinoBillett.fornavn === ""){
        document.getElementById("skrivNoeFornavn").innerHTML = "Må skrive noe i fornavnet";
    }
    else{
        document.getElementById("skrivNoeFornavn").innerHTML = "";
    }
    if (kinoBillett.etternavn === ""){
        document.getElementById("skrivNoeEtternavn").innerHTML = "Må skrive noe i etternavnet";
    }
    else{
        document.getElementById("skrivNoeEtternavn").innerHTML = "";
    }
    if (kinoBillett.telefonnr === ""){
        document.getElementById("skrivNoeTelefonnr").innerHTML = "Må skrive noe i telefonnr";
    }
    else{
        document.getElementById("skrivNoeTelefonnr").innerHTML = "";
    }
    if (kinoBillett.epost === ""){
        document.getElementById("skrivNoeEpost").innerHTML = "Må skrive noe i epost";
    }
    else{
        document.getElementById("skrivNoeEpost").innerHTML = "";
    }

    alleBilletter.push(kinoBillett); /*Putter objektet inn i arrayet */
    liste();

    document.getElementById("ulikeFilmer").value = ""; /*Tømmer inputfeltene etter man kjøper billett */
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";


}

function liste(){
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" + "</tr>";
    for (let i = 0; i < alleBilletter.length; i++){
        ut += "<tr>";
        ut += "<td>" + alleBilletter[i].film + "</td><td>" + alleBilletter[i].antall + "</td><td>"
        + alleBilletter[i].fornavn + "</td><td>" + alleBilletter[i].etternavn + "</td><td>"
        + alleBilletter[i].telefonnr + "</td><td>" + alleBilletter[i].epost + "</td>";
        ut += "</tr>";
    }

    ut += "</table>"
    document.getElementById("liste").innerHTML = ut;
}

function slettBillett() { /*Funksjon som sletter alle billettene (tømmer arrayet)*/
    alleBilletter = []
    liste();
}