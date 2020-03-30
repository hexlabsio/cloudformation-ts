import { Value } from '../../kloudformation/Value';
import { VpcConfigurationProps } from './accesspoint/VpcConfigurationProps';
import { PublicAccessBlockConfigurationProps } from './accesspoint/PublicAccessBlockConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function accessPoint(accessPointProps: AccessPoint & { logicalName?: string }): AccessPoint { return ({ ...accessPointProps, _logicalType: 'AWS::S3::AccessPoint' }) as unknown as AccessPoint }

export interface AccessPoint extends KloudResource {
    bucket: Value<string>;
    name?: Value<string>;
    vpcConfiguration?: VpcConfigurationProps;
    publicAccessBlockConfiguration?: PublicAccessBlockConfigurationProps;
    policy?: Value<any>;
    policyStatus?: Value<any>;
    networkOrigin?: Value<string>;
    creationDate?: Value<string>;
}