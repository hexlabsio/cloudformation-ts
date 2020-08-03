import { Value } from '../../../kloudformation/Value';
import { IntegrationResponseProps } from './IntegrationResponseProps';

export interface IntegrationProps {
  cacheKeyParameters?: Value<Value<string>[]>
  cacheNamespace?: Value<string>
  connectionId?: Value<string>
  connectionType?: Value<string>
  contentHandling?: Value<string>
  credentials?: Value<string>
  integrationHttpMethod?: Value<string>
  integrationResponses?: IntegrationResponseProps[]
  passthroughBehavior?: Value<string>
  requestParameters?: Value<Value<string>[]>
  requestTemplates?: Value<Value<string>[]>
  timeoutInMillis?: Value<number>
  type?: Value<string>
  uri?: Value<string>
}