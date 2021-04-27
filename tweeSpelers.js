let bord = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' '],
];
let spelAfgelopen = false;
let spelerAanZet;
let alleStatussen = [
	'status_begin',
	'status_X_aan_zet',
	'status_O_aan_zet',
	'status_X_gewonnen',
	'status_O_gewonnen',
	'status_gelijkspel',
];
let status = 'status_begin';

function pak(id) {
	const element = document.getElementById(id);

	if (!element) {
		alert(`Je hebt pak('${id}') aangeroepen, maar er bestaat geen element met ID ${id} op de pagina!`);
	}

	return element;
}

function nieuwSpel() {
	bord = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' '],
	];
	spelAfgelopen = false;

	// --- Opdracht 3 --- //

	spelerAanZet = 'X';

	// --- Opdracht 3 --- //

	status = 'status_X_aan_zet';

	beeldSpelAf();
}

function beeldSpelAf() {
	for (let rij = 0; rij < 3; rij++) {
		for (let kolom = 0; kolom < 3; kolom++) {
			let vakje = pak("rij_" + rij + "_kolom_" + kolom);
			vakje.innerText = bord[rij][kolom];
			vakje.className = bord[rij][kolom];
		}
	}

	for (let i = 0; i < alleStatussen.length; i++) {
		pak(alleStatussen[i]).className = '';
	}

	pak(status).className = 'zichtbaar';
}

function isWinnaar(teken) {
	for (let kolom = 0; kolom < 3; kolom++) {
		if (isKolomWinnaar(kolom, teken)) {
			return true;
		}
	}

	for (let rij = 0; rij < 3; rij++) {
		if (isRijWinnaar(rij, teken)) {
			return true;
		}
	}

	if (isDiagonaalLinksBovenRechtsOnderWinnaar(teken)) {
		return true;
	}

	if (isDiagonaalLinksOnderRechtsBovenWinnaar(teken)) {
		return true;
	}

	return false;
}

// --- Opdracht 6 --- //

function isKolomWinnaar(kolom, teken) {
	return bord[0][kolom] === teken
		&& bord[1][kolom] === teken
		&& bord[2][kolom] === teken
}

// --- Opdracht 6 --- //

// --- Opdracht 5 --- //

function isRijWinnaar(rij, teken) {
	return bord[rij][0] === teken
		&& bord[rij][1] === teken
		&& bord[rij][2] === teken
}

// --- Opdracht 5 --- //

function isDiagonaalLinksBovenRechtsOnderWinnaar(teken) {
	return bord[0][0] === teken &&
		bord[1][1] === teken &&
		bord[2][2] === teken;
}

function isDiagonaalLinksOnderRechtsBovenWinnaar(teken) {
	return bord[0][2] === teken &&
		bord[1][1] === teken &&
		bord[2][0] === teken;
}


function isBordVol() {
	for (let rij = 0; rij < 3; rij++) {
		for (let kolom = 0; kolom < 3; kolom++) {
			if (bord[rij][kolom] === ' ') {

				// --- Opdracht 7 --- //

				return false;

				// --- Opdracht 7 --- //
			}
		}
	}

	// --- Opdracht 8 --- //

	return true;

	// --- Opdracht 8 --- //
}


function verwerkZet() {
	if (isWinnaar('X')) {
		spelAfgelopen = true;
		status = 'status_X_gewonnen';
	} else if (isWinnaar('O')) {
		spelAfgelopen = true;
		status = 'status_O_gewonnen';
	} else if (isBordVol()) {
		spelAfgelopen = true;
		status = 'status_gelijkspel';
	} else if (spelerAanZet === 'X') {
		spelAfgelopen = false;
		status = 'status_X_aan_zet';
	} else {
		spelAfgelopen = false;
		status = 'status_O_aan_zet';
	}
}

function veldGekozen(rij, kolom) {
	if (spelAfgelopen) {
		return;
	}
	if (bord[rij][kolom] !== ' ') {
		return;
	}
	if (status === 'status_begin') {
		return;
	}

	doeZet(rij, kolom);
	beeldSpelAf();
}

function doeZet(rij, kolom) {
	bord[rij][kolom] = spelerAanZet;
	spelerAanZet = ander(spelerAanZet);
	verwerkZet();
}

function ander(teken) {
	if (teken === 'X') {
		return 'O';
	} else {
		return 'X';
	}
}
