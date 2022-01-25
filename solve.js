
function check_board() {
	// hiç kelime girilmiş mi?
		// evet
			// o zaman filtreleri çalıştır
		// hayır
			// ilk kelime olarak kitap tahmininde bulun
			make_guess('kitap');
}

function make_guess(word) {
	letters = word.split("");
	window.key[letters[0]].click();
	window.key[letters[1]].click();
	window.key[letters[2]].click();
	window.key[letters[3]].click();
	window.key[letters[4]].click();
	window.key['enter'].click();
}

check_board();



window.game = document.querySelector("game-app").shadowRoot.querySelector("#game");
window.board = game.children;
window.keyboard = game.children[2].shadowRoot.querySelector("#keyboard");

window.key = {
	e: window.keyboard.children[0].children[0],
	r: window.keyboard.children[0].children[1],
	t: window.keyboard.children[0].children[2],
	y: window.keyboard.children[0].children[3],
	u: window.keyboard.children[0].children[4],
	ı: window.keyboard.children[0].children[5],
	o: window.keyboard.children[0].children[6],
	p: window.keyboard.children[0].children[7],
	ğ: window.keyboard.children[0].children[8],
	ü: window.keyboard.children[0].children[9],
	a: window.keyboard.children[1].children[1],
	s: window.keyboard.children[1].children[2],
	d: window.keyboard.children[1].children[3],
	f: window.keyboard.children[1].children[4],
	g: window.keyboard.children[1].children[5],
	h: window.keyboard.children[1].children[6],
	j: window.keyboard.children[1].children[7],
	k: window.keyboard.children[1].children[8],
	l: window.keyboard.children[1].children[9],
	ş: window.keyboard.children[1].children[10],
	i: window.keyboard.children[1].children[11],
	enter: window.keyboard.children[2].children[0],
	z: window.keyboard.children[2].children[1],
	c: window.keyboard.children[2].children[2],
	v: window.keyboard.children[2].children[3],
	b: window.keyboard.children[2].children[4],
	n: window.keyboard.children[2].children[5],
	m: window.keyboard.children[2].children[6],
	ö: window.keyboard.children[2].children[7],
	ç: window.keyboard.children[2].children[8],
	backspace: window.keyboard.children[2].children[9]
}
