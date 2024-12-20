import classGlue from 'class-glue/keys-to-strings';
import { describe, expect, it } from 'vitest';

describe('classGlue Object String function', () => {
  it('should return an empty string for an empty object', () => {
    expect(classGlue({})).toBe('');
  });

  it('should handle a single truthy value', () => {
    expect(classGlue({ foo: true })).toBe('foo');
  });

  it('should handle multiple truthy values', () => {
    expect(classGlue({ foo: true, bar: true, baz: true })).toBe('foo bar baz');
  });

  it('should ignore falsy boolean values', () => {
    expect(classGlue({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should ignore null values', () => {
    expect(classGlue({ foo: true, bar: null, baz: true })).toBe('foo baz');
  });

  it('should ignore undefined values', () => {
    expect(classGlue({ foo: true, bar: undefined, baz: true })).toBe('foo baz');
  });

  it('should maintain the order of keys', () => {
    expect(classGlue({ c: true, a: true, b: true })).toBe('c a b');
  });

  it('should handle all falsy values', () => {
    expect(classGlue({ a: false, b: null, c: undefined })).toBe('');
  });

  it('should handle keys with spaces', () => {
    expect(classGlue({ 'foo bar': true, baz: true })).toBe('foo bar baz');
  });

  it('should handle symbol keys (ignoring them)', () => {
    const sym = Symbol('test');
    expect(classGlue({ [sym]: true, foo: true })).toBe('foo');
  });
});
