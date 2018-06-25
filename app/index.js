// @flow
const helloWorld = (input: string): string => `${input} ${process.env.SAMPLE || ''}`;

export default helloWorld;
