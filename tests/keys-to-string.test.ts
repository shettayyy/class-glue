import classX from 'class-x/keys-to-strings';
import { describe, expect, it } from 'vitest';

describe('classX Object String function', () => {
  it('should return an empty string for an empty object', () => {
    expect(classX({})).toBe('');
  });

  it('should handle a single truthy value', () => {
    expect(classX({ foo: true })).toBe('foo');
  });

  it('should handle multiple truthy values', () => {
    expect(classX({ foo: true, bar: true, baz: true })).toBe('foo bar baz');
  });

  it('should ignore falsy boolean values', () => {
    expect(classX({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should ignore null values', () => {
    expect(classX({ foo: true, bar: null, baz: true })).toBe('foo baz');
  });

  it('should ignore undefined values', () => {
    expect(classX({ foo: true, bar: undefined, baz: true })).toBe('foo baz');
  });

  it('should maintain the order of keys', () => {
    expect(classX({ c: true, a: true, b: true })).toBe('c a b');
  });

  it('should handle all falsy values', () => {
    expect(classX({ a: false, b: null, c: undefined })).toBe('');
  });

  it('should handle keys with spaces', () => {
    expect(classX({ 'foo bar': true, baz: true })).toBe('foo bar baz');
  });

  it('should handle symbol keys (ignoring them)', () => {
    const sym = Symbol('test');
    expect(classX({ [sym]: true, foo: true })).toBe('foo');
  });
});
