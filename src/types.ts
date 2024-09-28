export type ClassObject = { [key: string]: boolean | undefined | null };
export type ClassArray = ClassValue[];
export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassObject
  | ClassArray;
