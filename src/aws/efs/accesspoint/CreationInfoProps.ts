import { Value } from '../../../kloudformation/Value';

export interface CreationInfoProps {
  ownerUid: Value<string>
  ownerGid: Value<string>
  permissions: Value<string>
}