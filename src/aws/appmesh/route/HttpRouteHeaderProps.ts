import { Value } from '../../../kloudformation/Value';
import { HeaderMatchMethodProps } from './HeaderMatchMethodProps';

export interface HttpRouteHeaderProps {
  invert?: Value<boolean>
  name: Value<string>
  match?: HeaderMatchMethodProps
}