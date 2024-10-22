import createClassGlue from 'class-glue/merge-module-strings';
import { describe, expect, it } from 'vitest';

describe('classGlue (string version)', () => {
  it('should return an empty string for no arguments', () => {
    const clgl = createClassGlue({ foo: 'bar' });
    expect(clgl()).toBe('');
  });

  it('should handle a single string argument', () => {
    const clgl = createClassGlue({ foo: 'bar' });
    expect(clgl('foo')).toBe('bar');
  });

  it('should handle multiple string arguments', () => {
    const clgl = createClassGlue({ foo: 'bar', baz: 'qux' });
    expect(clgl('foo', 'baz')).toBe('bar qux');
  });

  it('should ignore empty strings', () => {
    const clgl = createClassGlue({ foo: 'bar', baz: '' });
    expect(clgl('foo', '', 'baz')).toBe('bar baz');
  });

  it('should handle a mix of valid and ignored values', () => {
    const clgl = createClassGlue({ foo: 'bar', baz: 'qux' });
    expect(clgl('foo', null, 'baz', { baz: true })).toBe('bar qux qux');
  });

  it('should handle all mixed values', () => {
    const clgl = createClassGlue({
      foo: 'bar',
      baz: 'qux',
      classX: 'classX',
      classGlue: 'classGlue',
      classZ: 'classZ',
    });
    expect(
      clgl('', null, undefined, false, true, 'hello', { baz: true }, [
        'foo',
        'world',
        ['welcome', { classX: true, classGlue: false }],
        { classZ: true },
      ]),
    ).toBe('hello qux bar world welcome classX classZ');
  });
});
