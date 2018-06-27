import Chai from 'chai';
import ChaiAsPromised from 'chai-as-promised';
import Sinon from 'sinon';
import SinonChai from 'sinon-chai';

Chai.use(ChaiAsPromised);
Chai.use(SinonChai);

global.expect = Chai.expect;
global.sinon = Sinon;
