import { Value } from '../../../kloudformation/Value';

export interface IntegrationResponseProps {
  contentHandling?: Value<string>
  responseParameters?: Value<Value<string>[]>
  responseTemplates?: Value<Value<string>[]>
  selectionPattern?: Value<string>
  statusCode: Value<string>
}