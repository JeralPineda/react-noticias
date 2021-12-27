export function isValidURL(str) {
   var pattern = new RegExp(/(http(s)?:\/\/.)/); // fragment locator
   return !!pattern.test(str);
}
