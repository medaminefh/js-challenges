/* 
    Count the vowels in str 
    vowels = 'a' | 'e' | 'i' | 'o' | 'u'

    Exp:
    countVowels('Hello, World!') => 3
*/




function countVowels() {
    var word = document.getElementById("wordInput").value;
    var vowelCount = 0;
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            vowelCount++;
        }
    }

    document.getElementById("demo").innerHTML = "The word '" + word + "' has " + vowelCount + " vowels.";
}