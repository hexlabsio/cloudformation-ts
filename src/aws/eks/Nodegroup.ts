import { Value } from '../../kloudformation/Value';
import { ScalingConfigProps } from './nodegroup/ScalingConfigProps';
import { RemoteAccessProps } from './nodegroup/RemoteAccessProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function nodegroup(nodegroupProps: Nodegroup & { logicalName?: string }): Nodegroup { return ({ ...nodegroupProps, _logicalType: 'AWS::EKS::Nodegroup' }) as unknown as Nodegroup }

export interface Nodegroup extends KloudResource {
    subnets: Value<Value<string>[]>;
    nodeRole: Value<string>;
    clusterName: Value<string>;
    scalingConfig?: ScalingConfigProps;
    labels?: Value<any>;
    releaseVersion?: Value<string>;
    nodegroupName?: Value<string>;
    amiType?: Value<string>;
    forceUpdateEnabled?: Value<boolean>;
    version?: Value<string>;
    remoteAccess?: RemoteAccessProps;
    diskSize?: Value<number>;
    instanceTypes?: Value<Value<string>[]>;
    tags?: Value<any>;
}