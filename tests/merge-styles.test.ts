import createClassX from 'class-x/merge-styles';
import { describe, expect, it } from 'vitest';

describe('classX (string version)', () => {
  it('should return an empty string for no arguments', () => {
    const cx = createClassX({ foo: { color: 'red' } });
    expect(cx()).toEqual({});
  });

  it('should handle a single string argument', () => {
    const cx = createClassX({ foo: { color: 'red' } });
    expect(cx('foo')).toEqual({ color: 'red' });
  });

  it('should handle multiple string arguments', () => {
    const cx = createClassX({
      foo: { color: 'red' },
      bar: { background: 'blue' },
    });
    expect(cx('foo', 'bar')).toEqual({ color: 'red', background: 'blue' });
  });

  it('should ignore empty strings', () => {
    const cx = createClassX({
      foo: { color: 'red' },
      bar: { background: 'blue' },
    });
    expect(cx('foo', '', 'bar')).toEqual({ color: 'red', background: 'blue' });
  });

  it('should handle a mix of valid and ignored values', () => {
    const cx = createClassX({
      foo: { color: 'red' },
      bar: { background: 'blue' },
    });
    expect(cx('foo', null, 'bar', { bar: true })).toEqual({
      color: 'red',
      background: 'blue',
    });
  });

  it('should handle all mixed values', () => {
    const cx = createClassX({
      foo: { color: 'red' },
      bar: { background: 'blue' },
      baz: { fontSize: 20 },
      qux: { fontWeight: 'bold' },
    });
    expect(
      cx('', null, undefined, false, true, 'hello', { baz: true }, [
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
