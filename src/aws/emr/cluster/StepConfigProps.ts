import { Value } from '../../../kloudformation/Value';
import { HadoopJarStepConfigProps } from './HadoopJarStepConfigProps';

export interface StepConfigProps {
  actionOnFailure?: Value<string>
  hadoopJarStep: HadoopJarStepConfigProps
  name: Value<string>
}