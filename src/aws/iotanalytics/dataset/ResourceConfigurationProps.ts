import { Value } from '../../../kloudformation/Value';

export interface ResourceConfigurationProps {
  volumeSizeInGB: Value<number>
  computeType: Value<string>
}