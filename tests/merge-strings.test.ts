import { describe, expect, it } from 'vitest';
import classX from '../src/merge-strings';

describe('classX (string version)', () => {
  it('should return an empty string for no arguments', () => {
    expect(classX()).toBe('');
  });

  it('should handle a single string argument', () => {
    expect(classX('foo')).toBe('foo');
  });

  it('should handle multiple string arguments', () => {
    expect(classX('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should ignore empty strings', () => {
    expect(classX('foo', '', 'bar')).toBe('foo bar');
  });

  it('should ignore null values', () => {
    expect(classX('foo', null, 'bar')).toBe('foo bar');
  });

  it('should ignore undefined values', () => {
    expect(classX('foo', undefined, 'bar')).toBe('foo bar');
  });

  it('should ignore boolean false values', () => {
    expect(classX('foo', false, 'bar')).toBe('foo bar');
  });

  it('should ignore boolean true values', () => {
    expect(classX('foo', true, 'bar')).toBe('foo bar');
  });

  it('should handle a mix of valid and ignored values', () => {
    expect(classX('foo', '', null, 'bar', undefined, false, 'baz', true)).toBe(
      'foo bar baz',
    );
  });

  it('should handle all ignored values', () => {
    expect(classX('', null, undefined, false, true)).toBe('');
  });

  it('should handle strings with spaces', () => {
    expect(classX('foo bar', 'baz')).toBe('foo bar baz');
  });

  it('should handle leading and trailing spaces in arguments', () => {
    expect(classX(' foo ', ' bar ')).toBe(' foo   bar ');
  });

  it('should handle a large number of arguments', () => {
    const args = Array(1000).fill('class');
    expect(classX(...args)).toBe(args.join(' '));
  });

  it('should handle repeated class names', () => {
    expect(classX('foo', 'bar', 'foo', 'baz', 'bar')).toBe(
      'foo bar foo baz bar',
    );
  });

  it('should handle single character class names', () => {
    expect(classX('a', 'b', 'c')).toBe('a b c');
  });

  it('should handle unicode characters', () => {
    expect(classX('foo', 'バー', 'baz')).toBe('foo バー baz');
  });

  it('should handle empty string as the first argument', () => {
    expect(classX('', 'foo', 'bar')).toBe('foo bar');
  });

  it('should handle all falsy string values', () => {
    expect(classX('', '', '')).toBe('');
  });
});
