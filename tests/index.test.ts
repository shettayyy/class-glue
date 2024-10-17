import classGlue from 'class-glue';
import { describe, expect, it } from 'vitest';

describe('classGlue function', () => {
  it('combines string arguments', () => {
    expect(classGlue('foo', 'bar')).toBe('foo bar');
    expect(classGlue('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('handles number arguments', () => {
    expect(classGlue('foo', 1, 2)).toBe('foo 1 2');
  });

  it('filters out falsy values', () => {
    expect(classGlue('foo', false, null, undefined, 0, '', 'bar')).toBe(
      'foo bar',
    );
  });

  it('handles object arguments', () => {
    expect(classGlue({ foo: true, bar: false, baz: true })).toBe('foo baz');
    expect(classGlue('base', { conditionalClass: true })).toBe(
      'base conditionalClass',
    );
  });

  it('handles array arguments', () => {
    expect(classGlue(['foo', 'bar'])).toBe('foo bar');
    expect(classGlue('base', ['conditionalClass', { nested: true }])).toBe(
      'base conditionalClass nested',
    );
  });

  it('handles nested arrays', () => {
    expect(classGlue('foo', ['bar', ['baz', 'qux']])).toBe('foo bar baz qux');
  });

  it('handles complex nested structures', () => {
    expect(
      classGlue('base', ['conditional', { nested: true }], { object: true }, [
        'array',
        ['deep', { complex: true }],
      ]),
    ).toBe('base conditional nested object array deep complex');
  });

  it('returns an empty string for all falsy inputs', () => {
    expect(classGlue(false, null, undefined, '', 0)).toBe('');
  });
});
