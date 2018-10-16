const PropA = 'PropA string';
const PropB = 'PropB string';
const PropC = 'PropC string';
const PropD = 'PropD string'; // Not exported

export { PropA, PropB, PropC };

// Export default means if a file is imported with a name specified
// it will import the defined default
export default () => 'I am the default program from Module C';