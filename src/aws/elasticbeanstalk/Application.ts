import { Value } from '../../kloudformation/Value';
import { ApplicationResourceLifecycleConfigProps } from './application/ApplicationResourceLifecycleConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationAttributes = {  }
export function application(applicationProps: Application): Application & { attributes: ApplicationAttributes } { return ({ ...applicationProps, _logicalType: 'AWS::ElasticBeanstalk::Application', attributes: {  } }) }

export interface Application extends KloudResource {
    applicationName?: Value<string>;
    description?: Value<string>;
    resourceLifecycleConfig?: ApplicationResourceLifecycleConfigProps;
}