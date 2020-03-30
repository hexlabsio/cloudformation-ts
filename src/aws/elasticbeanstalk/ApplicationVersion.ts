import { Value } from '../../kloudformation/Value';
import { SourceBundleProps } from './applicationversion/SourceBundleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function applicationVersion(applicationVersionProps: ApplicationVersion & { logicalName?: string }): ApplicationVersion { return ({ ...applicationVersionProps, _logicalType: 'AWS::ElasticBeanstalk::ApplicationVersion' }) as unknown as ApplicationVersion }

export interface ApplicationVersion extends KloudResource {
    applicationName: Value<string>;
    sourceBundle: SourceBundleProps;
    description?: Value<string>;
}