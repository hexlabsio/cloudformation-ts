import { Value } from '../../../kloudformation/Value';

export interface PortMappingProps {
  port: Value<number>
  protocol: Value<string>
}