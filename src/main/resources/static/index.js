let alleBilletter = [];

function kjopBillett(){ /*Oppretter variabler*/
    let inputFilmer = document.getElementById("ulikeFilmer").value;
    let inputAntall = document.getElementById("antall").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTelefonnr = document.getElementById("telefonnr").value;
    let inputEpost = document.getElementById("epost").value;

    const kinoBillett = {
        film : inputFilmer,
        antall : inputAntall,
        fornavn : inputFornavn,
        etternavn : inputEtternavn,
        telefonnr : inputTelefonnr,
        epost : inputEpost
    };

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

    alleBilletter.push(kinoBillett); /*Putter objektene som ble opprettet over inn i arrayet */
    liste();

    document.getElementById("ulikeFilmer").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

function liste() { /*Setter opp listen under 'Alle billetter'*/
    let output = "";
    for (let i = 0; i < alleBilletter.length; i++){
        output += alleBilletter[i].film+" "+alleBilletter[i].antall+" "+alleBilletter[i].fornavn+" "+alleBilletter[i].etternavn+" "+alleBilletter[i].telefonnr+" "+alleBilletter[i].epost;
    }
    document.getElementById("liste").innerHTML = output;
}

function slettBillett() { /*Fjerner innholdet i inputboksen og listen*/
    alleBilletter = []
    liste();
}