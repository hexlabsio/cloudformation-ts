import { Value } from '../../../kloudformation/Value';

export interface ImageTestsConfigurationProps {
  imageTestsEnabled?: Value<boolean>
  timeoutMinutes?: Value<number>
}