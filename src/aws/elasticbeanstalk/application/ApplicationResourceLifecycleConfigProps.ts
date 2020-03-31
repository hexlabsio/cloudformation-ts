import { Value } from '../../../kloudformation/Value';
import { ApplicationVersionLifecycleConfigProps } from './ApplicationVersionLifecycleConfigProps';

export function applicationResourceLifecycleConfigProps(applicationResourceLifecycleConfigPropsProps: ApplicationResourceLifecycleConfigProps): ApplicationResourceLifecycleConfigProps { return (applicationResourceLifecycleConfigPropsProps) }

export interface ApplicationResourceLifecycleConfigProps {
    serviceRole?: Value<string>;
    versionLifecycleConfig?: ApplicationVersionLifecycleConfigProps;
}