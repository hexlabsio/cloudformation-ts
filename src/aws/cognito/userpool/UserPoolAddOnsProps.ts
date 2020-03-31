import { Value } from '../../../kloudformation/Value';

export function userPoolAddOnsProps(userPoolAddOnsPropsProps: UserPoolAddOnsProps): UserPoolAddOnsProps { return (userPoolAddOnsPropsProps) }

export interface UserPoolAddOnsProps {
    advancedSecurityMode?: Value<string>;
}