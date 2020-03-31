import { Value } from '../../kloudformation/Value';
import { LoggingConfigurationProps } from './statemachine/LoggingConfigurationProps';
import { TagsEntryProps } from './statemachine/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type StateMachineAttributes = { Name: Attribute<string> }
export function stateMachine(stateMachineProps: StateMachine): StateMachine & { attributes: StateMachineAttributes } { return ({ ...stateMachineProps, _logicalType: 'AWS::StepFunctions::StateMachine', attributes: { Name: 'Name' } }) }

export interface StateMachine extends KloudResource {
    definitionString: Value<string>;
    roleArn: Value<string>;
    loggingConfiguration?: LoggingConfigurationProps;
    stateMachineName?: Value<string>;
    tags?: TagsEntryProps[];
    stateMachineType?: Value<string>;
}