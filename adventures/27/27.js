/* Adventure 27: Regexp captured groups.
 *
 * Capture groups allow matching a specific pattern while allowing the
 * developer to pull the captured string individually.
 *
 */

/* The things in the brackets are capture groups. */
const matchedName = "Dragon Marshall Wright".match(/(Dragon).+(Wright)/i);

// The entire matched string: Dragon Marshall Wright
console.log(matchedName[0]);

// First captured group: Dragon
console.log(matchedName[1]);

// Second captured group: Wright
console.log(matchedName[2]);
