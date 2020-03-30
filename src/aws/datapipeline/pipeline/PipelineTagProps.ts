import { Value } from '../../../kloudformation/Value';

export function pipelineTagProps(pipelineTagPropsProps: PipelineTagProps): PipelineTagProps { return (pipelineTagPropsProps) as unknown as PipelineTagProps }

export interface PipelineTagProps {
    key: Value<string>;
    value: Value<string>;
}