import { Value } from '../../kloudformation/Value';
import { ApplicationConfigurationProps } from './application/ApplicationConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function application(applicationProps: Application & { logicalName?: string }): Application { return ({ ...applicationProps, _logicalType: 'AWS::KinesisAnalyticsV2::Application' }) as unknown as Application }

export interface Application extends KloudResource {
    runtimeEnvironment: Value<string>;
    serviceExecutionRole: Value<string>;
    applicationName?: Value<string>;
    applicationConfiguration?: ApplicationConfigurationProps;
    applicationDescription?: Value<string>;
}