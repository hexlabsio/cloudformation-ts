import { Value } from '../../kloudformation/Value';
import { ExecutionControlsProps } from './remediationconfiguration/ExecutionControlsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RemediationConfigurationAttributes = {  }
export function remediationConfiguration(remediationConfigurationProps: RemediationConfiguration): RemediationConfiguration & { attributes: RemediationConfigurationAttributes } { return ({ ...remediationConfigurationProps, _logicalType: 'AWS::Config::RemediationConfiguration', attributes: {  } }) }

export interface RemediationConfiguration extends KloudResource {
    targetType: Value<string>;
    configRuleName: Value<string>;
    targetId: Value<string>;
    targetVersion?: Value<string>;
    executionControls?: ExecutionControlsProps;
    parameters?: Value<any>;
    resourceType?: Value<string>;
    retryAttemptSeconds?: Value<number>;
    maximumAutomaticAttempts?: Value<number>;
    automatic?: Value<boolean>;
}