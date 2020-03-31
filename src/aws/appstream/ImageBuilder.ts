import { Value } from '../../kloudformation/Value';
import { VpcConfigProps } from './imagebuilder/VpcConfigProps';
import { DomainJoinInfoProps } from './imagebuilder/DomainJoinInfoProps';
import { Tag } from '../Tag';
import { AccessEndpointProps } from './imagebuilder/AccessEndpointProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ImageBuilderAttributes = { StreamingUrl: Attribute<string> }
export function imageBuilder(imageBuilderProps: ImageBuilder): ImageBuilder & { attributes: ImageBuilderAttributes } { return ({ ...imageBuilderProps, _logicalType: 'AWS::AppStream::ImageBuilder', attributes: { StreamingUrl: 'StreamingUrl' } }) }

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