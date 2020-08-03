import { Value } from '../../../kloudformation/Value';
import { RunAsProps } from './RunAsProps';

export interface ExecutionProps {
  isolationMode?: Value<string>
  runAs?: RunAsProps
}