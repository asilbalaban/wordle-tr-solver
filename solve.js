
function check_board() {
	// hiç kelime girilmiş mi?
		// evet
			// o zaman filtreleri çalıştır
		// hayır
			// ilk kelime olarak kitap tahmininde bulun
			guess('kitap');

}

function guess(word) {
	letters = word.split("");
	key[letters[0]].click();
	key[letters[1]].click();
	key[letters[2]].click();
	key[letters[3]].click();
	key[letters[4]].click();
	key['enter'].click();
}

check_board();



game = document.querySelector("game-app").shadowRoot.querySelector("#game");
keyboard = game.children[2].shadowRoot.querySelector("#keyboard");

key = {
	e: keyboard.children[0].children[0],
	r: keyboard.children[0].children[1],
	t: keyboard.children[0].children[2],
	y: keyboard.children[0].children[3],
	u: keyboard.children[0].children[4],
	ı: keyboard.children[0].children[5],
	o: keyboard.children[0].children[6],
	p: keyboard.children[0].children[7],
	ğ: keyboard.children[0].children[8],
	ü: keyboard.children[0].children[9],
	a: keyboard.children[1].children[1],
	s: keyboard.children[1].children[2],
	d: keyboard.children[1].children[3],
	f: keyboard.children[1].children[4],
	g: keyboard.children[1].children[5],
	h: keyboard.children[1].children[6],
	j: keyboard.children[1].children[7],
	k: keyboard.children[1].children[8],
	l: keyboard.children[1].children[9],
	ş: keyboard.children[1].children[10],
	i: keyboard.children[1].children[11],
	enter: keyboard.children[2].children[0],
	z: keyboard.children[2].children[1],
	c: keyboard.children[2].children[2],
	v: keyboard.children[2].children[3],
	b: keyboard.children[2].children[4],
	n: keyboard.children[2].children[5],
	m: keyboard.children[2].children[6],
	ö: keyboard.children[2].children[7],
	ç: keyboard.children[2].children[8],
	backspace: keyboard.children[2].children[9]
}
