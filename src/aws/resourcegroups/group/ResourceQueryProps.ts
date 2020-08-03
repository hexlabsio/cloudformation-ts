import { Value } from '../../../kloudformation/Value';
import { QueryProps } from './QueryProps';

export interface ResourceQueryProps {
  type?: Value<string>
  query?: QueryProps
}