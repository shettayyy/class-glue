import { describe, expect, it } from 'vitest';
import classX from '../src/index';

describe('classX function', () => {
  it('combines string arguments', () => {
    expect(classX('foo', 'bar')).toBe('foo bar');
    expect(classX('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('handles number arguments', () => {
    expect(classX('foo', 1, 2)).toBe('foo 1 2');
  });

  it('filters out falsy values', () => {
    expect(classX('foo', false, null, undefined, 0, '', 'bar')).toBe('foo bar');
  });

  it('handles object arguments', () => {
    expect(classX({ foo: true, bar: false, baz: true })).toBe('foo baz');
    expect(classX('base', { conditionalClass: true })).toBe(
      'base conditionalClass',
    );
  });

  it('handles array arguments', () => {
    expect(classX(['foo', 'bar'])).toBe('foo bar');
    expect(classX('base', ['conditionalClass', { nested: true }])).toBe(
      'base conditionalClass nested',
    );
  });

  it('handles nested arrays', () => {
    expect(classX('foo', ['bar', ['baz', 'qux']])).toBe('foo bar baz qux');
  });

  it('handles complex nested structures', () => {
    expect(
      classX('base', ['conditional', { nested: true }], { object: true }, [
        'array',
        ['deep', { complex: true }],
      ]),
    ).toBe('base conditional nested object array deep complex');
  });

  it('returns an empty string for all falsy inputs', () => {
    expect(classX(false, null, undefined, '', 0)).toBe('');
  });
});
