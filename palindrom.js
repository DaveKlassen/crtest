/*
 * This function will convert a string to lowercase, remove non charaters,
 * and then perform a simple looping test to concur if the string is a palindrome or not.
 *
 * It can be tested against this site: http://www.palindromelist.net/
 */
function findPalindrom(string) {
  let palindrom = true;

  // Convert a string to lowercase and remove non charaters.
  let chars = string.toLowerCase();
  //let data = chars.replace(/[ ,!"'?\.\(\):-;]+/g,"");
  let data = chars.replace(/[\W]+/g,"");

	let flen = data.length - 1;
  let hlen = flen / 2;
  for (let i = 0; i < hlen; i++) {
    if (data[i] !== data[flen - i]) {
      palindrom = false;

      console.log(string + " = not a palindrom using: " + data);
      break;
    }
  }

  return(palindrom);
}

function checkAllPalindromes(arrayOfPalindrom) {
  let pals = 0;
  let nonPals = 0;
  for (let j = 0; j < arrayOfPalindrom.length; j++) {
    let res = findPalindrom(arrayOfPalindrom[j]);

    if (res) {
      pals++;
    } else {
      nonPals++;
    }
  }

  console.log(pals + " Palindromes");
  console.log(nonPals + " failed");
}

var palindromes = [
"A but tuba.",
"A car, a man, a maraca.",
"A dog, a plan, a canal: pagoda.",
"A dog! A panic in a pagoda!",
"A lad named E. Mandala",
"A man, a plan, a canal: Panama.",
"A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!",
"A new order began, a more Roman age bred Rowena.",
"A nut for a jar of tuna.",
"A Santa at Nasa.",
"A Santa dog lived as a devil God at NASA.",
"A slut nixes sex in Tulsa.",
"A tin mug for a jar of gum, Nita.",
"A Toyota! Race fast, safe car! A Toyota!",
"A Toyota’s a Toyota.",
"Able was I ere I saw Elba.",
"Acrobats stab orca.",
"Aerate pet area.",
"Ah, Satan sees Natasha!",
"Aibohphobia", // (fear of palindromes)
"Air an aria.",
"Al lets Della call Ed Stella.",
"alula",
"Amen icy cinema.",
"Amore, Roma.",
"Amy, must I jujitsu my ma?",
"Ana",
"Animal loots foliated detail of stool lamina.",
"Anna",
"Anne, I vote more cars race Rome to Vienna.",
"Are Mac ‘n’ Oliver ever evil on camera?",
"Are we not drawn onward to new era?",
"Are we not drawn onward, we few, drawn onward to new era?",
"Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.",
"Art, name no tub time. Emit but one mantra.",
"As I pee, sir, I see Pisa!",
"Avid diva.",
"Baby Bab",
"Bar an arab.",
"Barge in! Relate mere war of 1991 for a were-metal Ernie grab!",
"Bird rib.",
"Bombard a drab mob.",
"boob",
"Borrow or rob?",
"Bursitis Rub",
"Bush saw Sununu swash sub.",
"Cain: a maniac.",
"“Cain, a motor erotomaniac was Eve,” said I as Eve saw Cain, “a motor erotomaniac!”",
"cammac",
"Camp Mac",
"Campus motto: Bottoms up Mac.",
"Capac", // (Michigan)
"Cigar? Toss it in a can. It is so tragic.",
"civic",
"Daedalus: nine. Peninsula: dead.",
"Dammit, I’m mad!",
"Decaf and DNA faced.",
"Dee saw a seed.",
"deified",
"Degas, are we not drawn onward, no? In union, drawn onward to new eras aged?",
"deleveled",
"Delia saw I was ailed.",
"Denim axes examined.",
"“Dennis and Edna dine,” said I, as Enid and Edna sinned.",
"Dennis and Edna sinned.",
"Dennis sinned.",
"Dennis, Eve saw Eden if as a fine dew, as Eve sinned.",
"Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.",
"Dentist? Sit Ned.",
"Depardieu, go razz a rogue I draped.",
"Desserts I desire not, so long no lost one rise distressed.",
"Desserts, I stressed!",
"“Desserts, sis?” (Sensuousness is stressed).",
"detartrated",
"Devil never even lived.",
"devoved",
"dewed",
"Dial Laid",
"Did Hannah see bees? Hannah did.",
"Did I cite Operas Are Poetic? I did.",
"Did I do, O God, did I as I said I’d do? Good! I did.",
"Did I draw Della too tall, Edward? I did?",
"Did mom pop? Mom did.",
"Didi won straw warts. Now I did.",
"Do geese see God?",
"Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I — lo! — rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!",
"Do nine men interpret? Nine men. I nod.",
"Do not bob to nod.",
"Do offer ref food.",
"Do, O God, no evil deed! Live on! Do good!",
"Doc, note, I Dissent. A fast never prevents a fatness. I diet on cod.",
"Dog doo? Good God!",
"Dog! No poop on God!",
"Dogma in my hymn: I am God.",
"Dogma: I am God",
"Don’t nod.",
"Doom mood",
"Dr. Awkward",
"Drab as a fool, aloof as a bard.",
"Drat Saddam! Mad dastard!",
"Drat such custard!",
"Draw Kwan awkward.",
"Draw nine men inward.",
"Draw O Caesar. Erase a coward.",
"Draw pupil’s lip upward.",
"Draw Ward",
"Draw, O coward!",
"Drawer’s reward.",
"Drawn onward.",
"Drawn, I sit; serene rest is inward.",
"Dubya won? No way, bud.",
"Dumb mud.",
"Ed, I hung a gnu hide!",
"Ed, I saw Harpo Marx ram Oprah W. aside.",
"Egad! A base life defiles a bad age.",
"Egad! A base tone denotes a bad age.",
"Egad! An adage!",
"Egad! Loretta has Adams as mad as a hatter. Old age!",
"Egad! No bondage?",
"Elba Kramer saw I was remarkable.",
"Elite tile.",
"Elk rap song? No sparkle.",
"Elle",
"Em to Greg: Gad! A dagger got me!",
"Emily’s sassy lime",
"Emu love volume.",
"Enid and Edna dine.",
"Ere I saw Elba, able was I ere.",
"Ergo, a ogre",
"Erupt on Naomi? I moan, “Not pure!”",
"Eva use Suave.",
"Eva, can I stab bats in a cave?",
"Eve",
"Eve damned Eden. Mad Eve!",
"Eve saw Diamond, erred. No maid was Eve!",
"“Evil axis”, sides reversed, is “six alive”.",
"Evi saves God dogs (evasive).",
"Evil did I dwell, lewd I did live.",
"Evil olive",
"Evil rats on no star live.",
"Evil, a sin, is alive.",
"evitative",
"Ew! Eat a ewe?"
];
checkAllPalindromes(palindromes);