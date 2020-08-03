import { Value } from '../../../kloudformation/Value';
import { KeyValueProps } from './KeyValueProps';

export interface HadoopJarStepConfigProps {
  args?: Value<Value<string>[]>
  jar: Value<string>
  mainClass?: Value<string>
  stepProperties?: KeyValueProps[]
}