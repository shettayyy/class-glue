import classY from 'class-y/keys-to-strings';
import { describe, expect, it } from 'vitest';

describe('classY Object String function', () => {
  it('should return an empty string for an empty object', () => {
    expect(classY({})).toBe('');
  });

  it('should handle a single truthy value', () => {
    expect(classY({ foo: true })).toBe('foo');
  });

  it('should handle multiple truthy values', () => {
    expect(classY({ foo: true, bar: true, baz: true })).toBe('foo bar baz');
  });

  it('should ignore falsy boolean values', () => {
    expect(classY({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should ignore null values', () => {
    expect(classY({ foo: true, bar: null, baz: true })).toBe('foo baz');
  });

  it('should ignore undefined values', () => {
    expect(classY({ foo: true, bar: undefined, baz: true })).toBe('foo baz');
  });

  it('should maintain the order of keys', () => {
    expect(classY({ c: true, a: true, b: true })).toBe('c a b');
  });

  it('should handle all falsy values', () => {
    expect(classY({ a: false, b: null, c: undefined })).toBe('');
  });

  it('should handle keys with spaces', () => {
    expect(classY({ 'foo bar': true, baz: true })).toBe('foo bar baz');
  });

  it('should handle symbol keys (ignoring them)', () => {
    const sym = Symbol('test');
    expect(classY({ [sym]: true, foo: true })).toBe('foo');
  });
});
