import classGlue from 'class-glue/join-strings';
import { describe, expect, it } from 'vitest';

describe('classGlue (string version)', () => {
  it('should return an empty string for no arguments', () => {
    expect(classGlue()).toBe('');
  });

  it('should handle a single string argument', () => {
    expect(classGlue('foo')).toBe('foo');
  });

  it('should handle multiple string arguments', () => {
    expect(classGlue('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should ignore empty strings', () => {
    expect(classGlue('foo', '', 'bar')).toBe('foo bar');
  });

  it('should ignore null values', () => {
    expect(classGlue('foo', null, 'bar')).toBe('foo bar');
  });

  it('should ignore undefined values', () => {
    expect(classGlue('foo', undefined, 'bar')).toBe('foo bar');
  });

  it('should ignore boolean false values', () => {
    expect(classGlue('foo', false, 'bar')).toBe('foo bar');
  });

  it('should ignore boolean true values', () => {
    expect(classGlue('foo', true, 'bar')).toBe('foo bar');
  });

  it('should handle a mix of valid and ignored values', () => {
    expect(
      classGlue('foo', '', null, 'bar', undefined, false, 'baz', true),
    ).toBe('foo bar baz');
  });

  it('should handle all ignored values', () => {
    expect(classGlue('', null, undefined, false, true)).toBe('');
  });

  it('should handle strings with spaces', () => {
    expect(classGlue('foo bar', 'baz')).toBe('foo bar baz');
  });

  it('should handle leading and trailing spaces in arguments', () => {
    expect(classGlue(' foo ', ' bar ')).toBe(' foo   bar ');
  });

  it('should handle a large number of arguments', () => {
    const args = Array(1000).fill('class');
    expect(classGlue(...args)).toBe(args.join(' '));
  });

  it('should handle repeated class names', () => {
    expect(classGlue('foo', 'bar', 'foo', 'baz', 'bar')).toBe(
      'foo bar foo baz bar',
    );
  });

  it('should handle single character class names', () => {
    expect(classGlue('a', 'b', 'c')).toBe('a b c');
  });

  it('should handle unicode characters', () => {
    expect(classGlue('foo', 'バー', 'baz')).toBe('foo バー baz');
  });

  it('should handle empty string as the first argument', () => {
    expect(classGlue('', 'foo', 'bar')).toBe('foo bar');
  });

  it('should handle all falsy string values', () => {
    expect(classGlue('', '', '')).toBe('');
  });
});
