import { Value } from '../../kloudformation/Value';
import { ExecutionControlsProps } from './remediationconfiguration/ExecutionControlsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function remediationConfiguration(remediationConfigurationProps: RemediationConfiguration & { logicalName?: string }): RemediationConfiguration { return ({ ...remediationConfigurationProps, _logicalType: 'AWS::Config::RemediationConfiguration' }) as unknown as RemediationConfiguration }

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