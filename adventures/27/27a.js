/* Adventure 27a: Named regexp captured groups.
 *
 * Named capture groups allow providing a variable name to reference matched groups
 * allowing the developer to select the specific matched group instead of using random access.
 *
 */

/* ?<variableName> signifies the name for the captured group. */
const matchedName = "Dragon Marshall Wright".match(/(?<firstName>Dragon).+(?<lastName>Wright)/i);

// The entire matched string: Dragon Marshall Wright
console.log(matchedName[0]);

// Use .groups.variableName to access the specific named capture group
console.log(matchedName.groups.firstName);

console.log(matchedName.groups.lastName);

// Simulating the scenario where one capture group is missing

const matchedBlurb = "Some Super Long String".match(/Some.+(?<term1>Duper).+(?<term2>String)/i);

// Since 1 term could not be matched, the match completely fails. Null is returned.
console.log(matchedBlurb); // null