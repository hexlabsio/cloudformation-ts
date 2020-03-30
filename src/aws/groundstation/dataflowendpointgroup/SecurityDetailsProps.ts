import { Value } from '../../../kloudformation/Value';

export function securityDetailsProps(securityDetailsPropsProps: SecurityDetailsProps): SecurityDetailsProps { return (securityDetailsPropsProps) as unknown as SecurityDetailsProps }

export interface SecurityDetailsProps {
    subnetIds?: Value<Value<string>[]>;
    securityGroupIds?: Value<Value<string>[]>;
    roleArn?: Value<string>;
}