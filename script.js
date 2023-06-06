// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = [];
	for(let i =0;i<encodedStr.length;i++){
		const asciiCode = character.charCodeAt(i);
	    if(asciiCode<91 && asciiCode>64){
		asciiCode = asciiCode+13;
		const character = String.fromCharCode(asciiCode);
		decodedArr.push(character)
		}
		else{
			decodedArr.push(String.fromCharCode(asciiCode))
		}
	}
    return decodedArr;
}


module.exports = rot13;
