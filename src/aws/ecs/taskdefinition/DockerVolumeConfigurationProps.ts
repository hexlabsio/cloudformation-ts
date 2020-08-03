import { Value } from '../../../kloudformation/Value';

export interface DockerVolumeConfigurationProps {
  autoprovision?: Value<boolean>
  driver?: Value<string>
  driverOpts?: Value<Value<string>[]>
  labels?: Value<Value<string>[]>
  scope?: Value<string>
}