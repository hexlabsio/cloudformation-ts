import { Value } from '../../kloudformation/Value';
import { InputDestinationRequestProps } from './input/InputDestinationRequestProps';
import { InputVpcRequestProps } from './input/InputVpcRequestProps';
import { MediaConnectFlowRequestProps } from './input/MediaConnectFlowRequestProps';
import { InputSourceRequestProps } from './input/InputSourceRequestProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type InputAttributes = { Destinations: Attribute<Value<string>[]>; Arn: Attribute<string>; Sources: Attribute<Value<string>[]> }
export function input(inputProps: Input): Input & { attributes: InputAttributes } { return ({ ...inputProps, _logicalType: 'AWS::MediaLive::Input', attributes: { Destinations: 'Destinations', Arn: 'Arn', Sources: 'Sources' } }) }

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