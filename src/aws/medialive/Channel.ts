import { InputAttachmentProps } from './channel/InputAttachmentProps';
import { InputSpecificationProps } from './channel/InputSpecificationProps';
import { Value } from '../../kloudformation/Value';
import { OutputDestinationProps } from './channel/OutputDestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ChannelAttributes = { Arn: Attribute<string>; Inputs: Attribute<Value<string>[]> }
export function channel(channelProps: Channel): Channel & { attributes: ChannelAttributes } { return ({ ...channelProps, _logicalType: 'AWS::MediaLive::Channel', attributes: { Arn: 'Arn', Inputs: 'Inputs' } }) }

export interface Channel extends KloudResource {
    inputAttachments?: InputAttachmentProps[];
    inputSpecification?: InputSpecificationProps;
    channelClass?: Value<string>;
    encoderSettings?: Value<any>;
    destinations?: OutputDestinationProps[];
    logLevel?: Value<string>;
    roleArn?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}