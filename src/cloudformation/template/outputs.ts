import { ApiDefinition } from '../modules/api';
import { Value } from '../Value';

export interface Output {
  description? : string;
  value: Value<any>;
  export?: { name: string };
}
export interface Outputs {
  apis?: ApiDefinition[];
  outputs?: Record<string, Output>;
}

export function stackOutput(value: Value<string>, description?: string, exportName?: string): Output {
  return { value, description: description ?? '', ...(exportName ? { export: { name: exportName } } : {})};
}
