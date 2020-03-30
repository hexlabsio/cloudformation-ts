import { Value } from '../../../kloudformation/Value';

export function originGroupMemberProps(originGroupMemberPropsProps: OriginGroupMemberProps): OriginGroupMemberProps { return (originGroupMemberPropsProps) as unknown as OriginGroupMemberProps }

export interface OriginGroupMemberProps {
    originId: Value<string>;
}