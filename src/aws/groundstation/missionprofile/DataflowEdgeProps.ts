import { Value } from '../../../kloudformation/Value';

export interface DataflowEdgeProps {
  source?: Value<string>
  destination?: Value<string>
}