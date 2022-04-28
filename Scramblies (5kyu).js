/*Complete the function scramble(str1, str2) that returns true if a
 portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False*/

function scramble(str1, str2) {
    const tempObj = {};

    for (let char of str1) {
        if (tempObj[char]) {
            tempObj[char]++;
        } else {
            tempObj[char] = 1;
        }
    }

    for (let char of str2) {
        if (tempObj[char]) {
            tempObj[char]--;
        } else {
            return false;
        }
    }
    return true;
}