import { Value } from '../../../kloudformation/Value';

export interface ElasticsearchConfigProps {
  awsRegion: Value<string>
  endpoint: Value<string>
}