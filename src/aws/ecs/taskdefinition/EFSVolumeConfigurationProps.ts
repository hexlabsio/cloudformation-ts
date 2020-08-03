import { Value } from '../../../kloudformation/Value';

export interface EFSVolumeConfigurationProps {
  filesystemId: Value<string>
  rootDirectory?: Value<string>
  transitEncryption?: Value<string>
  transitEncryptionPort?: Value<number>
  authorizationConfig?: Value<any>
}