// @flow
import RewiredComponent from 'app/rewired_component';

const helloWorld = (input: string): string => `${input} ${RewiredComponent} ${process.env.SAMPLE || ''}`;

export default helloWorld;
