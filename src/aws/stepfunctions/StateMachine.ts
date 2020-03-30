import { Value } from '../../kloudformation/Value';
import { LoggingConfigurationProps } from './statemachine/LoggingConfigurationProps';
import { TagsEntryProps } from './statemachine/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stateMachine(stateMachineProps: StateMachine & { logicalName?: string }): StateMachine { return ({ ...stateMachineProps, _logicalType: 'AWS::StepFunctions::StateMachine' }) as unknown as StateMachine }

export interface StateMachine extends KloudResource {
    definitionString: Value<string>;
    roleArn: Value<string>;
    loggingConfiguration?: LoggingConfigurationProps;
    stateMachineName?: Value<string>;
    tags?: TagsEntryProps[];
    stateMachineType?: Value<string>;
}