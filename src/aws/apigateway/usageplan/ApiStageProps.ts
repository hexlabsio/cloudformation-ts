import { Value } from '../../../kloudformation/Value';
import { ThrottleSettingsProps } from './ThrottleSettingsProps';

export interface ApiStageProps {
  apiId?: Value<string>
  stage?: Value<string>
  throttle?: { [key: string]: ThrottleSettingsProps }
}