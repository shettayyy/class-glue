import classY from 'class-y/join-strings';
import { describe, expect, it } from 'vitest';

describe('classY (string version)', () => {
  it('should return an empty string for no arguments', () => {
    expect(classY()).toBe('');
  });

  it('should handle a single string argument', () => {
    expect(classY('foo')).toBe('foo');
  });

  it('should handle multiple string arguments', () => {
    expect(classY('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should ignore empty strings', () => {
    expect(classY('foo', '', 'bar')).toBe('foo bar');
  });

  it('should ignore null values', () => {
    expect(classY('foo', null, 'bar')).toBe('foo bar');
  });

  it('should ignore undefined values', () => {
    expect(classY('foo', undefined, 'bar')).toBe('foo bar');
  });

  it('should ignore boolean false values', () => {
    expect(classY('foo', false, 'bar')).toBe('foo bar');
  });

  it('should ignore boolean true values', () => {
    expect(classY('foo', true, 'bar')).toBe('foo bar');
  });

  it('should handle a mix of valid and ignored values', () => {
    expect(classY('foo', '', null, 'bar', undefined, false, 'baz', true)).toBe(
      'foo bar baz',
    );
  });

  it('should handle all ignored values', () => {
    expect(classY('', null, undefined, false, true)).toBe('');
  });

  it('should handle strings with spaces', () => {
    expect(classY('foo bar', 'baz')).toBe('foo bar baz');
  });

  it('should handle leading and trailing spaces in arguments', () => {
    expect(classY(' foo ', ' bar ')).toBe(' foo   bar ');
  });

  it('should handle a large number of arguments', () => {
    const args = Array(1000).fill('class');
    expect(classY(...args)).toBe(args.join(' '));
  });

  it('should handle repeated class names', () => {
    expect(classY('foo', 'bar', 'foo', 'baz', 'bar')).toBe(
      'foo bar foo baz bar',
    );
  });

  it('should handle single character class names', () => {
    expect(classY('a', 'b', 'c')).toBe('a b c');
  });

  it('should handle unicode characters', () => {
    expect(classY('foo', 'バー', 'baz')).toBe('foo バー baz');
  });

  it('should handle empty string as the first argument', () => {
    expect(classY('', 'foo', 'bar')).toBe('foo bar');
  });

  it('should handle all falsy string values', () => {
    expect(classY('', '', '')).toBe('');
  });
});
