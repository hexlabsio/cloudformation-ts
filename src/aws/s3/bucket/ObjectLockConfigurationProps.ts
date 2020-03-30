import { Value } from '../../../kloudformation/Value';
import { ObjectLockRuleProps } from './ObjectLockRuleProps';

export function objectLockConfigurationProps(objectLockConfigurationPropsProps: ObjectLockConfigurationProps): ObjectLockConfigurationProps { return (objectLockConfigurationPropsProps) as unknown as ObjectLockConfigurationProps }

export interface ObjectLockConfigurationProps {
    objectLockEnabled?: Value<string>;
    rule?: ObjectLockRuleProps;
}