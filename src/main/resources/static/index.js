let alleBilletter = []; /*For å lagre kinobilletter*/

function kjopBillett(){ /*Funksjon som kalles når man trykker på 'Kjøp billett'-knappen. Den henter verdier fra inpulfeltene*/
    let inputFilmer = document.getElementById("ulikeFilmer").value;
    let inputAntall = document.getElementById("antall").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTelefonnr = document.getElementById("telefonnr").value;
    let inputEpost = document.getElementById("epost").value;

    let validering = true;

    if (inputFilmer === "") { /*Inputvalidering for valg av film*/
        document.getElementById("skrivNoeFilm").innerHTML = "Må velge en film";
        validering = false;
    }
    else {
        document.getElementById("skrivNoeFilm").innerHTML = "";
    }

    if (inputAntall === "") { /*Inputvalidering for å skrive inn antall*/
        document.getElementById("skrivNoeAntall").innerHTML = "Skriv noe i antall";
        validering = false;
    }
    else {
        document.getElementById("skrivNoeAntall").innerHTML = "";
    }

    if (inputFornavn === "") { /*Inputvalidering for å skrive inn gyldig fornavn*/
        document.getElementById("skrivNoeFornavn").innerHTML = "Skriv noe i fornavn";
        validering = false;
    }
    else if (!/[a-zA-Z ,.'æøåÆØÅ]+$/.test(inputFornavn)) {
        document.getElementById("skrivNoeFornavn").innerHTML = "Vennligst skriv et gyldig fornavn";
        validering = false;
    }
    else {
        document.getElementById("skrivNoeFornavn").innerHTML = "";
    }

    if (inputEtternavn === "") { /*Inputvalidering for å skrive inn gyldig etternavn*/
        document.getElementById("skrivNoeEtternavn").innerHTML = "Skriv noe i etternavn";
        validering = false;
    }
    else if (!/[a-zA-Z ,.'æøåÆØÅ]+$/.test(inputEtternavn)) {
        document.getElementById("skrivNoeEtternavn").innerHTML = "Vennligst skriv inn et gyldig etternavn";
        validering = false;
    }
    else {
        document.getElementById("skrivNoeEtternavn").innerHTML = "";
    }

    if (inputTelefonnr === "") { /*Inputvalidering for å skrive inn gyldig telefonnummer*/
        document.getElementById("skrivNoeTelefonnr").innerHTML = "Skriv noe i telefonnummer";
        validering = false;
    }
    else if (!/^\d{8}$/.test(inputTelefonnr)) {
        document.getElementById("skrivNoeTelefonnr").innerHTML = "Vennligst skriv et gyldig telefonnummer";
        validering = false;
    }
    else {
        document.getElementById("skrivNoeTelefonnr").innerHTML = "";
    }

    if (inputEpost === "") { /*Inputvalidering for å skrive inn gyldig epost*/
        document.getElementById("skrivNoeEpost").innerHTML = "Skriv noe i epost";
        validering = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEpost)) {
        document.getElementById("skrivNoeEpost").innerHTML = "Vennligst skriv en gyldig epost";
        validering = false;
    }
    else {
        document.getElementById("skrivNoeEpost").innerHTML = "";
    }

    if (!validering) { /*Hindrer 'kjopBillett' i å kjøre dersom noen av inputfeltene er ugyldige*/
        return;
    }

    const kinoBillett = { /*Oppretter et objekt basert på verdiene fra inputfeltene*/
        film : inputFilmer,
        antall : inputAntall,
        fornavn : inputFornavn,
        etternavn : inputEtternavn,
        telefonnr : inputTelefonnr,
        epost : inputEpost
    };

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