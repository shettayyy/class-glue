import createClassGlue from 'class-glue/merge-styles';
import { describe, expect, it } from 'vitest';

describe('classGlue (string version)', () => {
  it('should return an empty string for no arguments', () => {
    const clgl = createClassGlue({ foo: { color: 'red' } });
    expect(clgl()).toEqual({});
  });

  it('should handle a single string argument', () => {
    const clgl = createClassGlue({ foo: { color: 'red' } });
    expect(clgl('foo')).toEqual({ color: 'red' });
  });

  it('should handle multiple string arguments', () => {
    const clgl = createClassGlue({
      foo: { color: 'red' },
      bar: { background: 'blue' },
    });
    expect(clgl('foo', 'bar')).toEqual({ color: 'red', background: 'blue' });
  });

  it('should ignore empty strings', () => {
    const clgl = createClassGlue({
      foo: { color: 'red' },
      bar: { background: 'blue' },
    });
    expect(clgl('foo', '', 'bar')).toEqual({
      color: 'red',
      background: 'blue',
    });
  });

  it('should handle a mix of valid and ignored values', () => {
    const clgl = createClassGlue({
      foo: { color: 'red' },
      bar: { background: 'blue' },
    });
    expect(clgl('foo', null, 'bar', { bar: true })).toEqual({
      color: 'red',
      background: 'blue',
    });
  });

  it('should handle all mixed values', () => {
    const clgl = createClassGlue({
      foo: { color: 'red' },
      bar: { background: 'blue' },
      baz: { fontSize: 20 },
      qux: { fontWeight: 'bold' },
    });
    expect(
      clgl('', null, undefined, false, true, 'hello', { baz: true }, [
        'foo',
        'world',
        ['welcome', { qux: true, baz: false }],
        { bar: true },
      ]),
    ).toEqual({
      color: 'red',
      background: 'blue',
      fontSize: 20,
      fontWeight: 'bold',
    });
  });
});
