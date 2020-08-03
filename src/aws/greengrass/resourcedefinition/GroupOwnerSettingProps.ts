import { Value } from '../../../kloudformation/Value';

export interface GroupOwnerSettingProps {
  autoAddGroupOwner: Value<boolean>
  groupOwner?: Value<string>
}