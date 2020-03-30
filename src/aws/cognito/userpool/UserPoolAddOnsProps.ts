import { Value } from '../../../kloudformation/Value';

export function userPoolAddOnsProps(userPoolAddOnsPropsProps: UserPoolAddOnsProps): UserPoolAddOnsProps { return (userPoolAddOnsPropsProps) as unknown as UserPoolAddOnsProps }

export interface UserPoolAddOnsProps {
    advancedSecurityMode?: Value<string>;
}