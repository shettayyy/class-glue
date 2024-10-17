import createClassGlue from 'class-glue/merge-module-strings';
import { describe, expect, it } from 'vitest';

describe('classGlue (string version)', () => {
  it('should return an empty string for no arguments', () => {
    const cx = createClassGlue({ foo: 'bar' });
    expect(cx()).toBe('');
  });

  it('should handle a single string argument', () => {
    const cx = createClassGlue({ foo: 'bar' });
    expect(cx('foo')).toBe('bar');
  });

  it('should handle multiple string arguments', () => {
    const cx = createClassGlue({ foo: 'bar', baz: 'qux' });
    expect(cx('foo', 'baz')).toBe('bar qux');
  });

  it('should ignore empty strings', () => {
    const cx = createClassGlue({ foo: 'bar', baz: '' });
    expect(cx('foo', '', 'baz')).toBe('bar baz');
  });

  it('should handle a mix of valid and ignored values', () => {
    const cx = createClassGlue({ foo: 'bar', baz: 'qux' });
    expect(cx('foo', null, 'baz', { baz: true })).toBe('bar qux qux');
  });

  it('should handle all mixed values', () => {
    const cx = createClassGlue({
      foo: 'bar',
      baz: 'qux',
      classX: 'classX',
      classGlue: 'classGlue',
      classZ: 'classZ',
    });
    expect(
      cx('', null, undefined, false, true, 'hello', { baz: true }, [
        'foo',
        'world',
        ['welcome', { classX: true, classGlue: false }],
        { classZ: true },
      ]),
    ).toBe('hello qux bar world welcome classX classZ');
  });
});
