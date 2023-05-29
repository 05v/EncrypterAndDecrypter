class Encrypter {
  encrypt(stringToEncrypt) {
    // maakt het automatisch CAPITAL LETTERS
    stringToEncrypt = stringToEncrypt.toUpperCase();
    let encryptedString = [];
    // voor elke letter in de input van wat je wilt encrypten
    // zal hij de letters veranderen
    for (let i = 0; i < stringToEncrypt.length; i++) {
      switch (stringToEncrypt[i]) {
        // schuift elke letter 3 letters op, ik kan dit leuk
        // letter voor letter uittypen maar het blijft hetzelfde doen
        case "A":
          encryptedString.push("D");
          break;
        case "B":
          encryptedString.push("E");
          break;
        case "C":
          encryptedString.push("F");
          break;
        case "D":
          encryptedString.push("G");
          break;
        case "E":
          encryptedString.push("H");
          break;
        case "F":
          encryptedString.push("I");
          break;
        case "G":
          encryptedString.push("J");
          break;
        case "H":
          encryptedString.push("K");
          break;
        case "I":
          encryptedString.push("L");
          break;
        case "J":
          encryptedString.push("M");
          break;
        case "K":
          encryptedString.push("N");
          break;
        case "L":
          encryptedString.push("O");
          break;
        case "M":
          encryptedString.push("P");
          break;
        case "N":
          encryptedString.push("Q");
          break;
        case "O":
          encryptedString.push("R");
          break;
        case "P":
          encryptedString.push("S");
          break;
        case "Q":
          encryptedString.push("T");
          break;
        case "R":
          encryptedString.push("U");
          break;
        case "S":
          encryptedString.push("V");
          break;
        case "T":
          encryptedString.push("W");
          break;
        case "U":
          encryptedString.push("X");
          break;
        case "V":
          encryptedString.push("Y");
          break;
        case "W":
          encryptedString.push("Z");
          break;
        case "X":
          encryptedString.push("A");
          break;
        case "Y":
          encryptedString.push("B");
          break;
        case "Z":
          encryptedString.push("C");
          break;
        default:
          encryptedString.push(stringToEncrypt[i]);
          break;
      }
    }
    // plakt elke letter achter elkaar zonder spaties
    // en returned de encryptie als encryptedString
    encryptedString = encryptedString.join("");
    return encryptedString;
  }
}
