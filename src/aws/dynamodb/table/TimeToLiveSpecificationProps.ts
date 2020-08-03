import { Value } from '../../../kloudformation/Value';

export interface TimeToLiveSpecificationProps {
  attributeName: Value<string>
  enabled: Value<boolean>
}