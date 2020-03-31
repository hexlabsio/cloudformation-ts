import { Value } from '../../../kloudformation/Value';

export function elasticsearchSettingsProps(elasticsearchSettingsPropsProps: ElasticsearchSettingsProps): ElasticsearchSettingsProps { return (elasticsearchSettingsPropsProps) }

export interface ElasticsearchSettingsProps {
    endpointUri?: Value<string>;
    fullLoadErrorPercentage?: Value<number>;
    errorRetryDuration?: Value<number>;
    serviceAccessRoleArn?: Value<string>;
}