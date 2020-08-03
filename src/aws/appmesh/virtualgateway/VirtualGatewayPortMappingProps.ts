import { Value } from '../../../kloudformation/Value';

export interface VirtualGatewayPortMappingProps {
  port: Value<number>
  protocol: Value<string>
}