let computerTeken = 'O';
let spelerTeken = 'X';
let bord = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let spelAfgelopen = false;
let alleStatussen = ['status_begin', 'status_speler_aan_zet', 'status_computer_wint',
	'status_speler_gewonnen', 'status_computer_gewonnen', 'status_gelijkspel', 'status_computer_aan_zet'];
let status = 'status_begin';
let computerNadenkTijd = 1000;

function pak(id) {
	return document.getElementById(id);
}

function nieuwSpel() {
	const computerBegint = pak('computerBegint').checked;
	if (computerBegint) {
		computerTeken = 'X';
		spelerTeken = 'O';
	} else {
		computerTeken = 'O';
		spelerTeken = 'X';
	}
	bord = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
	spelAfgelopen = false;
	if (computerBegint) {
        status = 'status_computer_aan_zet';
        beeldSpelAf();
        
        setTimeout(() => {
            doeZet(0, 0, computerTeken);
            beeldSpelAf();
        }, computerNadenkTijd);
    }else status = 'status_speler_aan_zet';

	beeldSpelAf();
}

function beeldSpelAf() {
	for (let rij = 0; rij < 3; rij++)
		for (let kolom = 0; kolom < 3; kolom++) {
			let vakje = pak("rij_" + rij + "_kolom_" + kolom);
			vakje.innerText = bord[rij][kolom];
			vakje.className = bord[rij][kolom];
		}
	for (let i = 0; i < alleStatussen.length; i++)
		pak(alleStatussen[i]).className = '';
	pak(status).className = 'zichtbaar';
}

function isWinnaar(teken) {
	for (let kolom = 0; kolom < 3; kolom++)
		if (isKolomWinnaar(kolom, teken))
			return true;
	for (let rij = 0; rij < 3; rij++)
		if (isRijWinnaar(rij, teken))
			return true;
	if (isDiagonaalLinksBovenRechtsOnderWinnaar(teken))
		return true;
	if (isDiagonaalLinksOnderRechtsBovenWinnaar(teken))
		return true;
	return false;
}

function isKolomWinnaar(kolom, teken) {
	return bord[0][kolom] === teken && bord[1][kolom] === teken && bord[2][kolom] === teken;
}

function isRijWinnaar(rij, teken) {
	return bord[rij][0] === teken && bord[rij][1] === teken && bord[rij][2] === teken;
}

function isDiagonaalLinksBovenRechtsOnderWinnaar(teken) {
	return bord[0][0] === teken && bord[1][1] === teken && bord[2][2] === teken;
}

function isDiagonaalLinksOnderRechtsBovenWinnaar(teken) {
	return bord[0][2] === teken && bord[1][1] === teken && bord[2][0] === teken;
}

function isBordVol() {
	for (let rij = 0; rij < 3; rij++)
		for (let kolom = 0; kolom < 3; kolom++)
			if (bord[rij][kolom] === ' ')
				return false;
	return true;
}

function verwerkZet() {
	if (isWinnaar(spelerTeken)) {
		spelAfgelopen = true;
		status = 'status_speler_gewonnen';
	} else if (isWinnaar(computerTeken)) {
		spelAfgelopen = true;
		status = 'status_computer_gewonnen';
	} else if (isBordVol()) {
		spelAfgelopen = true;
		status = 'status_gelijkspel';
	} else {
		spelAfgelopen = false;
		if (zoekBesteZet(spelerTeken).score < 0)
			status = 'status_computer_wint';
		else
			status = 'status_speler_aan_zet';
	}
}

function veldGekozen(rij, kolom) {
	if (spelAfgelopen)
		return;
	if (bord[rij][kolom] !== ' ')
		return;
    if(status === 'status_computer_aan_zet')
        return;
	doeZet(rij, kolom, spelerTeken);
	if (!spelAfgelopen)
		doeComputerZet();
	beeldSpelAf();
}

function doeComputerZet() {
	const zet = zoekBesteZet(computerTeken);

    status = 'status_computer_aan_zet';
    beeldSpelAf();

	setTimeout(() => {
        doeZet(zet.rij, zet.kolom, computerTeken);
        beeldSpelAf();
    }, computerNadenkTijd);
}

function doeZet(rij, kolom, teken) {
	bord[rij][kolom] = teken;
	verwerkZet();
}

function zoekBesteZet(teken) {
	let besteZet = {score: -2};
	for (let rij = 0; rij < 3; rij++)
		for (let kolom = 0; kolom < 3; kolom++)
			if (bord[rij][kolom] === ' ') {
				const zet = {rij: rij, kolom: kolom};
				zet.score = berekenScoreVoorZet(zet, teken);
				if (zet.score > besteZet.score)
					besteZet = zet;
			}
	return besteZet;
}

function berekenScoreVoorZet(zet, teken) {
	bord[zet.rij][zet.kolom] = teken;
	let score;
	if (isWinnaar(teken)) {
		score = 1;
	} else if (isBordVol()) {
		score = 0;
	} else {
		const volgendeZet = zoekBesteZet(ander(teken));
		score = -volgendeZet.score;
	}
	bord[zet.rij][zet.kolom] = ' ';
	return score;
}

function ander(teken) {
	if (teken === 'X')
		return 'O';
	else
		return 'X';
}
