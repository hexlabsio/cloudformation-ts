import { Value } from '../../kloudformation/Value';
import { InputDestinationRequestProps } from './input/InputDestinationRequestProps';
import { InputVpcRequestProps } from './input/InputVpcRequestProps';
import { MediaConnectFlowRequestProps } from './input/MediaConnectFlowRequestProps';
import { InputSourceRequestProps } from './input/InputSourceRequestProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function input(inputProps: Input & { logicalName?: string }): Input { return ({ ...inputProps, _logicalType: 'AWS::MediaLive::Input' }) as unknown as Input }

export interface Input extends KloudResource {
    type?: Value<string>;
    destinations?: InputDestinationRequestProps[];
    vpc?: InputVpcRequestProps;
    mediaConnectFlows?: MediaConnectFlowRequestProps[];
    inputSecurityGroups?: Value<Value<string>[]>;
    sources?: InputSourceRequestProps[];
    roleArn?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}