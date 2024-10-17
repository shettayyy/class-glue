import classY from 'class-y';
import { describe, expect, it } from 'vitest';

describe('classY function', () => {
  it('combines string arguments', () => {
    expect(classY('foo', 'bar')).toBe('foo bar');
    expect(classY('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('handles number arguments', () => {
    expect(classY('foo', 1, 2)).toBe('foo 1 2');
  });

  it('filters out falsy values', () => {
    expect(classY('foo', false, null, undefined, 0, '', 'bar')).toBe('foo bar');
  });

  it('handles object arguments', () => {
    expect(classY({ foo: true, bar: false, baz: true })).toBe('foo baz');
    expect(classY('base', { conditionalClass: true })).toBe(
      'base conditionalClass',
    );
  });

  it('handles array arguments', () => {
    expect(classY(['foo', 'bar'])).toBe('foo bar');
    expect(classY('base', ['conditionalClass', { nested: true }])).toBe(
      'base conditionalClass nested',
    );
  });

  it('handles nested arrays', () => {
    expect(classY('foo', ['bar', ['baz', 'qux']])).toBe('foo bar baz qux');
  });

  it('handles complex nested structures', () => {
    expect(
      classY('base', ['conditional', { nested: true }], { object: true }, [
        'array',
        ['deep', { complex: true }],
      ]),
    ).toBe('base conditional nested object array deep complex');
  });

  it('returns an empty string for all falsy inputs', () => {
    expect(classY(false, null, undefined, '', 0)).toBe('');
  });
});
