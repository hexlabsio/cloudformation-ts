import { Value } from '../../../kloudformation/Value';

export interface ElasticsearchSettingsProps {
  endpointUri?: Value<string>
  fullLoadErrorPercentage?: Value<number>
  errorRetryDuration?: Value<number>
  serviceAccessRoleArn?: Value<string>
}