import { Value } from '../../../kloudformation/Value';
import { KeyValueProps } from './KeyValueProps';

export function hadoopJarStepConfigProps(hadoopJarStepConfigPropsProps: HadoopJarStepConfigProps): HadoopJarStepConfigProps { return (hadoopJarStepConfigPropsProps) as unknown as HadoopJarStepConfigProps }

export interface HadoopJarStepConfigProps {
    jar: Value<string>;
    args?: Value<Value<string>[]>;
    mainClass?: Value<string>;
    stepProperties?: KeyValueProps[];
}