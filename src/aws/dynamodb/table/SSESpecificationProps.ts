import { Value } from '../../../kloudformation/Value';

export interface SSESpecificationProps {
  kMSMasterKeyId?: Value<string>
  sSEEnabled: Value<boolean>
  sSEType?: Value<string>
}