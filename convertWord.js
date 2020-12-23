// Ubah function convertWords untuk mengkonversi huruf kecil menjadi besar
// & sebalik nya

function convertWords(kalimat) {
  // you can only write your code here!
  return kalimat.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
});
}
// TEST CASES
console.log(convertWords('Hello World')); // "hELLO wORLD"
console.log(convertWords('jajan pisang goreng di pasar'));
console.log(convertWords('saya PaHaM Jav4Scr1pttt'));
console.log(convertWords('HUJ4n, 3n4k M4kaN b4$0'));