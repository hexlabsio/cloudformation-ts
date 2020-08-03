import { Value } from '../../../kloudformation/Value';

export interface MetadataOptionsProps {
  httpPutResponseHopLimit?: Value<number>
  httpTokens?: Value<string>
  httpEndpoint?: Value<string>
}