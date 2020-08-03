import { Value } from '../../kloudformation/Value';
import { CodeProps } from './canary/CodeProps';
import { ScheduleProps } from './canary/ScheduleProps';
import { Tag } from '../Tag';
import { VPCConfigProps } from './canary/VPCConfigProps';
import { RunConfigProps } from './canary/RunConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CanaryAttributes = { Id: Attribute<string>;State: Attribute<string> }
export function canary(canaryProps: Canary): Canary & {attributes: CanaryAttributes} { return ({ ...canaryProps, _logicalType: 'AWS::Synthetics::Canary', attributes: { Id: 'Id',State: 'State' } }) }
   
export interface Canary extends KloudResource {
  name: Value<string>
  code: CodeProps
  artifactS3Location: Value<string>
  schedule: ScheduleProps
  executionRoleArn: Value<string>
  runtimeVersion: Value<string>
  successRetentionPeriod?: Value<number>
  failureRetentionPeriod?: Value<number>
  tags?: Tag[]
  vPCConfig?: VPCConfigProps
  runConfig?: RunConfigProps
  startCanaryAfterCreation: Value<boolean>
}