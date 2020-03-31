import { Value } from '../../../kloudformation/Value';

export function awsOrganizationsSourceProps(awsOrganizationsSourcePropsProps: AwsOrganizationsSourceProps): AwsOrganizationsSourceProps { return (awsOrganizationsSourcePropsProps) }

export interface AwsOrganizationsSourceProps {
    organizationSourceType: Value<string>;
    organizationalUnits?: Value<Value<string>[]>;
}