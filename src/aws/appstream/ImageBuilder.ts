import { Value } from '../../kloudformation/Value';
import { VpcConfigProps } from './imagebuilder/VpcConfigProps';
import { DomainJoinInfoProps } from './imagebuilder/DomainJoinInfoProps';
import { Tag } from '../Tag';
import { AccessEndpointProps } from './imagebuilder/AccessEndpointProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function imageBuilder(imageBuilderProps: ImageBuilder & { logicalName?: string }): ImageBuilder { return ({ ...imageBuilderProps, _logicalType: 'AWS::AppStream::ImageBuilder' }) as unknown as ImageBuilder }

export interface ImageBuilder extends KloudResource {
    instanceType: Value<string>;
    name: Value<string>;
    imageName?: Value<string>;
    description?: Value<string>;
    vpcConfig?: VpcConfigProps;
    enableDefaultInternetAccess?: Value<boolean>;
    displayName?: Value<string>;
    domainJoinInfo?: DomainJoinInfoProps;
    appstreamAgentVersion?: Value<string>;
    tags?: Tag[];
    imageArn?: Value<string>;
    accessEndpoints?: AccessEndpointProps[];
}