import { Value } from '../../../kloudformation/Value';

export function analyticsConfigurationProps(analyticsConfigurationPropsProps: AnalyticsConfigurationProps): AnalyticsConfigurationProps { return (analyticsConfigurationPropsProps) }

export interface AnalyticsConfigurationProps {
    userDataShared?: Value<boolean>;
    externalId?: Value<string>;
    applicationId?: Value<string>;
    roleArn?: Value<string>;
}