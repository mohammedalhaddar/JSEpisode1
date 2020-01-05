/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
	!name? console.log("Hello") : console.log(`Hello ${name}`)
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
	return n % 2 != 0;
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
	return Math.floor(n/2);
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
	// Your code here
	if (n % 2 != 0){
		return Math.pow(n, 2)
	}else{
		return n + n
	}
}

/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate("19870506") -> 31 (because the birthday already passed)
 *    ageFromBirthDate("19971110") -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
	const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
    const [YEAR, MONTH, DAY] = [parseInt(birthDate.substring(0,4)), parseInt(birthDate.substring(4,6)), parseInt(birthDate.substring(6))]
    const birth = new Date(YEAR, MONTH - 1, DAY)
    return Math.floor(((new Date() - birth) / _MS_PER_YEAR))
	// Your code here
}

module.exports = {
	greet,
	isOdd,
	oddsSmallerThan,
	squareOrDouble,
	ageFromBirthDate
};
