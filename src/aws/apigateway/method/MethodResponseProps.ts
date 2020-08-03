import { Value } from '../../../kloudformation/Value';

export interface MethodResponseProps {
  responseModels?: Value<Value<string>[]>
  responseParameters?: Value<Value<boolean>[]>
  statusCode: Value<string>
}