import { InputAttachmentProps } from './channel/InputAttachmentProps';
import { InputSpecificationProps } from './channel/InputSpecificationProps';
import { Value } from '../../kloudformation/Value';
import { OutputDestinationProps } from './channel/OutputDestinationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function channel(channelProps: Channel & { logicalName?: string }): Channel { return ({ ...channelProps, _logicalType: 'AWS::MediaLive::Channel' }) as unknown as Channel }

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