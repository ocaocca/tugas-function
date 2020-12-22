// ubah function convertMe dengan parameter berupa multidimensi Array
// yg berisi firstName, lastName, gender & birth year.

// convertMe akan me return sebuah object yg mempunyai property:
// firstName,
// lastName,
// gender,
// age

// value age di dapatkan, dengan mengurangi tahun saat ini dengan tahun lahir.
// Jika birth year tidak di isi, maka tampilkan 'invalid date'

function convertMe(arr) {
  // you can only write your code here!
}

// TEST CASES
convertMe([['Tom', 'Cruise', 'Male', 1962], ['Johnny', 'Deep', 'Male'], ['nobita', 'Male']]);
// 1. Tom Cruise:
// { firstName: 'Tom',
//   lastName: 'Cruise',
//   gender: 'Male',
//   age: 37 }
// 2. Johnny Deep:
// { firstName: 'Johnny',
//   lastName: 'Deep',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
convertMe([]); // ""