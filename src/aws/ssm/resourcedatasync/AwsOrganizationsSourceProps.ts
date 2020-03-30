import { Value } from '../../../kloudformation/Value';

export function awsOrganizationsSourceProps(awsOrganizationsSourcePropsProps: AwsOrganizationsSourceProps): AwsOrganizationsSourceProps { return (awsOrganizationsSourcePropsProps) as unknown as AwsOrganizationsSourceProps }

export interface AwsOrganizationsSourceProps {
    organizationSourceType: Value<string>;
    organizationalUnits?: Value<Value<string>[]>;
}