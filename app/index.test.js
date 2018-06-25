import Index from './index';

describe('Index Test', function () {
  it('works as intended', function () {
    expect(Index('hello world')).to.eql('hello world sample_env');
  });
});
