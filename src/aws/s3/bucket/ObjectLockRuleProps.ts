import { DefaultRetentionProps } from './DefaultRetentionProps';

export function objectLockRuleProps(objectLockRulePropsProps: ObjectLockRuleProps): ObjectLockRuleProps { return (objectLockRulePropsProps) }

export interface ObjectLockRuleProps {
    defaultRetention?: DefaultRetentionProps;
}