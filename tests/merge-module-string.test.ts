import createClassX from 'class-x/merge-module-strings';
import { describe, expect, it } from 'vitest';

describe('classX (string version)', () => {
  it('should return an empty string for no arguments', () => {
    const cx = createClassX({ foo: 'bar' });
    expect(cx()).toBe('');
  });

  it('should handle a single string argument', () => {
    const cx = createClassX({ foo: 'bar' });
    expect(cx('foo')).toBe('bar');
  });

  it('should handle multiple string arguments', () => {
    const cx = createClassX({ foo: 'bar', baz: 'qux' });
    expect(cx('foo', 'baz')).toBe('bar qux');
  });

  it('should ignore empty strings', () => {
    const cx = createClassX({ foo: 'bar', baz: '' });
    expect(cx('foo', '', 'baz')).toBe('bar baz');
  });

  it('should handle a mix of valid and ignored values', () => {
    const cx = createClassX({ foo: 'bar', baz: 'qux' });
    expect(cx('foo', null, 'baz', { baz: true })).toBe('bar qux qux');
  });

  it('should handle all mixed values', () => {
    const cx = createClassX({
      foo: 'bar',
      baz: 'qux',
      classX: 'classX',
      classY: 'classY',
      classZ: 'classZ',
    });
    expect(
      cx('', null, undefined, false, true, 'hello', { baz: true }, [
        'foo',
        'world',
        ['welcome', { classX: true, classY: false }],
        { classZ: true },
      ]),
    ).toBe('hello qux bar world welcome classX classZ');
  });
});
