import { Value } from '../../../kloudformation/Value';

export interface ElasticIpProps {
  ip: Value<string>
  name?: Value<string>
}