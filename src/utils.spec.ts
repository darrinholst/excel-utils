import {expect} from 'chai';
import {encodeColumn, decodeColumn} from './utils';

describe('excel utils', () => {
  it('encodes a column', () => {
    expect(encodeColumn('A')).to.eql(1);
    expect(encodeColumn('a')).to.eql(1);
    expect(encodeColumn('AA')).to.eql(27);
    expect(encodeColumn('ZZ')).to.eql(702);
    expect(encodeColumn('RPQ')).to.eql(12601);
  });

  it('decodes a column', () => {
    expect(decodeColumn(1)).to.eql('A');
    expect(decodeColumn(27)).to.eql('AA');
    expect(decodeColumn(702)).to.eql('ZZ');
    expect(decodeColumn(12601)).to.eql('RPQ');
  });
});
