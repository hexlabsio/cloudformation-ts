import { Value } from '../../../kloudformation/Value';

export interface PortMappingProps {
  containerPort?: Value<number>
  hostPort?: Value<number>
  protocol?: Value<string>
}