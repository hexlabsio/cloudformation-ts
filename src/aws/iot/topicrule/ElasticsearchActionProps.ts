import { Value } from '../../../kloudformation/Value';

export interface ElasticsearchActionProps {
  endpoint: Value<string>
  id: Value<string>
  index: Value<string>
  roleArn: Value<string>
  type: Value<string>
}