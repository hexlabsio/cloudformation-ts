import { Value } from '../../kloudformation/Value';
import { ExecutionControlsProps } from './remediationConfiguration/ExecutionControlsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function remediationConfiguration(remediationConfigurationProps: RemediationConfiguration): RemediationConfiguration { return ({ ...remediationConfigurationProps, _logicalType: '' }) }
  
export interface RemediationConfiguration extends KloudResource {
  targetVersion?: Value<string>
  executionControls?: ExecutionControlsProps
  parameters?: Value<any>
  targetType: Value<string>
  configRuleName: Value<string>
  resourceType?: Value<string>
  retryAttemptSeconds?: Value<number>
  maximumAutomaticAttempts?: Value<number>
  targetId: Value<string>
  automatic?: Value<boolean>
}