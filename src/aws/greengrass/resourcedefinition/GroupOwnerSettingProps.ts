import { Value } from '../../../kloudformation/Value';

export function groupOwnerSettingProps(groupOwnerSettingPropsProps: GroupOwnerSettingProps): GroupOwnerSettingProps { return (groupOwnerSettingPropsProps) }

export interface GroupOwnerSettingProps {
    autoAddGroupOwner: Value<boolean>;
    groupOwner?: Value<string>;
}