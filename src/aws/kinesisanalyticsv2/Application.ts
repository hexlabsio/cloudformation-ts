import { Value } from '../../kloudformation/Value';
import { ApplicationConfigurationProps } from './application/ApplicationConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationAttributes = {  }
export function application(applicationProps: Application): Application & { attributes: ApplicationAttributes } { return ({ ...applicationProps, _logicalType: 'AWS::KinesisAnalyticsV2::Application', attributes: {  } }) }

export interface Application extends KloudResource {
    runtimeEnvironment: Value<string>;
    serviceExecutionRole: Value<string>;
    applicationName?: Value<string>;
    applicationConfiguration?: ApplicationConfigurationProps;
    applicationDescription?: Value<string>;
}