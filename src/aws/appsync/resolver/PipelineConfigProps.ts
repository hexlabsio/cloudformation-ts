import { Value } from '../../../kloudformation/Value';

export function pipelineConfigProps(pipelineConfigPropsProps: PipelineConfigProps): PipelineConfigProps { return (pipelineConfigPropsProps) }

export interface PipelineConfigProps {
    functions?: Value<Value<string>[]>;
}