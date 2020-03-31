import { Value } from '../../kloudformation/Value';
import { SourceBundleProps } from './applicationversion/SourceBundleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationVersionAttributes = {  }
export function applicationVersion(applicationVersionProps: ApplicationVersion): ApplicationVersion & { attributes: ApplicationVersionAttributes } { return ({ ...applicationVersionProps, _logicalType: 'AWS::ElasticBeanstalk::ApplicationVersion', attributes: {  } }) }

export interface ApplicationVersion extends KloudResource {
    applicationName: Value<string>;
    sourceBundle: SourceBundleProps;
    description?: Value<string>;
}