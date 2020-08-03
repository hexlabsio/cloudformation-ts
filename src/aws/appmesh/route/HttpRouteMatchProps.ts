import { Value } from '../../../kloudformation/Value';
import { HttpRouteHeaderProps } from './HttpRouteHeaderProps';

export interface HttpRouteMatchProps {
  scheme?: Value<string>
  headers?: HttpRouteHeaderProps[]
  prefix: Value<string>
  method?: Value<string>
}