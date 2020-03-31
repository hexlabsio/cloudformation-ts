import { Value } from '../../../kloudformation/Value';

export function organizationAggregationSourceProps(organizationAggregationSourcePropsProps: OrganizationAggregationSourceProps): OrganizationAggregationSourceProps { return (organizationAggregationSourcePropsProps) }

export interface OrganizationAggregationSourceProps {
    roleArn: Value<string>;
    allAwsRegions?: Value<boolean>;
    awsRegions?: Value<Value<string>[]>;
}