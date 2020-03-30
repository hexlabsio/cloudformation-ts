import { Value } from '../../../kloudformation/Value';

export function groupIdentifierProps(groupIdentifierPropsProps: GroupIdentifierProps): GroupIdentifierProps { return (groupIdentifierPropsProps) as unknown as GroupIdentifierProps }

export interface GroupIdentifierProps {
    groupId: Value<string>;
}