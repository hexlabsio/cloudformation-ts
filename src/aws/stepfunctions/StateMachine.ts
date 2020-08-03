import { Value } from '../../kloudformation/Value';
import { LoggingConfigurationProps } from './stateMachine/LoggingConfigurationProps';
import { DefinitionSubstitutionsProps } from './stateMachine/DefinitionSubstitutionsProps';
import { S3LocationProps } from './stateMachine/S3LocationProps';
import { TagsEntryProps } from './stateMachine/TagsEntryProps';
import { TracingConfigurationProps } from './stateMachine/TracingConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type StateMachineAttributes = { Name: Attribute<string> }
export function stateMachine(stateMachineProps: StateMachine): StateMachine & {attributes: StateMachineAttributes} { return ({ ...stateMachineProps, _logicalType: 'AWS::StepFunctions::StateMachine', attributes: { Name: 'Name' } }) }
   
export interface StateMachine extends KloudResource {
  definitionString?: Value<string>
  loggingConfiguration?: LoggingConfigurationProps
  definitionSubstitutions?: DefinitionSubstitutionsProps
  definitionS3Location?: S3LocationProps
  stateMachineName?: Value<string>
  roleArn: Value<string>
  tags?: TagsEntryProps[]
  stateMachineType?: Value<string>
  tracingConfiguration?: TracingConfigurationProps
}