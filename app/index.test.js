const IndexInjector = require('inject-loader!./index');

const Index = IndexInjector({
  'app/rewired_component': 'rewired',
}).default;

describe('Index Test', function () {
  it('works as intended', function () {
    expect(Index('hello world')).to.eql('hello world rewired sample_env');
  });
});
