import { Value } from '../../../kloudformation/Value';
import { ZoneAwarenessConfigProps } from './ZoneAwarenessConfigProps';

export function elasticsearchClusterConfigProps(elasticsearchClusterConfigPropsProps: ElasticsearchClusterConfigProps): ElasticsearchClusterConfigProps { return (elasticsearchClusterConfigPropsProps) }

export interface ElasticsearchClusterConfigProps {
    dedicatedMasterCount?: Value<number>;
    dedicatedMasterEnabled?: Value<boolean>;
    dedicatedMasterType?: Value<string>;
    instanceCount?: Value<number>;
    instanceType?: Value<string>;
    zoneAwarenessConfig?: ZoneAwarenessConfigProps;
    zoneAwarenessEnabled?: Value<boolean>;
}