import { Value } from '../../../kloudformation/Value';

export function pipelineConfigProps(pipelineConfigPropsProps: PipelineConfigProps): PipelineConfigProps { return (pipelineConfigPropsProps) as unknown as PipelineConfigProps }

export interface PipelineConfigProps {
    functions?: Value<Value<string>[]>;
}