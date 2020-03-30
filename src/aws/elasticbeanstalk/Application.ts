import { Value } from '../../kloudformation/Value';
import { ApplicationResourceLifecycleConfigProps } from './application/ApplicationResourceLifecycleConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function application(applicationProps: Application & { logicalName?: string }): Application { return ({ ...applicationProps, _logicalType: 'AWS::ElasticBeanstalk::Application' }) as unknown as Application }

export interface Application extends KloudResource {
    applicationName?: Value<string>;
    description?: Value<string>;
    resourceLifecycleConfig?: ApplicationResourceLifecycleConfigProps;
}