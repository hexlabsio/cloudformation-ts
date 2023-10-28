import { Value } from '../Value';

export type Parameter = ({
  type: string;
} | {
  type: 'Future';
  environmentName: string;
}) & {
  default?: string;
  allowedValues? : string[];
  description? : string;
}

export type Params<T> = { [K in keyof T]: <R = string>() => Value<R> }