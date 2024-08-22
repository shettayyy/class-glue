import { describe, expect, it } from 'vitest';
import { cx } from '../src/index';

describe('cx function', () => {
  it('combines string arguments', () => {
    expect(cx('foo', 'bar')).toBe('foo bar');
    expect(cx('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('handles number arguments', () => {
    expect(cx('foo', 1, 2)).toBe('foo 1 2');
  });

  it('filters out falsy values', () => {
    expect(cx('foo', false, null, undefined, 0, '', 'bar')).toBe('foo bar');
  });

  it('handles object arguments', () => {
    expect(cx({ foo: true, bar: false, baz: true })).toBe('foo baz');
    expect(cx('base', { conditionalClass: true })).toBe(
      'base conditionalClass',
    );
  });

  it('handles array arguments', () => {
    expect(cx(['foo', 'bar'])).toBe('foo bar');
    expect(cx('base', ['conditionalClass', { nested: true }])).toBe(
      'base conditionalClass nested',
    );
  });

  it('handles nested arrays', () => {
    expect(cx('foo', ['bar', ['baz', 'qux']])).toBe('foo bar baz qux');
  });

  it('handles complex nested structures', () => {
    expect(
      cx('base', ['conditional', { nested: true }], { object: true }, [
        'array',
        ['deep', { complex: true }],
      ]),
    ).toBe('base conditional nested object array deep complex');
  });

  it('returns an empty string for all falsy inputs', () => {
    expect(cx(false, null, undefined, '', 0)).toBe('');
  });
});
