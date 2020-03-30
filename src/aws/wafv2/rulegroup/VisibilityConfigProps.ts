import { Value } from '../../../kloudformation/Value';

export function visibilityConfigProps(visibilityConfigPropsProps: VisibilityConfigProps): VisibilityConfigProps { return (visibilityConfigPropsProps) as unknown as VisibilityConfigProps }

export interface VisibilityConfigProps {
    sampledRequestsEnabled: Value<boolean>;
    cloudWatchMetricsEnabled: Value<boolean>;
    metricName: Value<string>;
}