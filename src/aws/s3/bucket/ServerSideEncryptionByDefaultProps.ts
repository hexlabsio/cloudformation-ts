import { Value } from '../../../kloudformation/Value';

export interface ServerSideEncryptionByDefaultProps {
  kMSMasterKeyID?: Value<string>
  sSEAlgorithm: Value<string>
}