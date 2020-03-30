import { FieldProps } from './FieldProps';
import { Value } from '../../../kloudformation/Value';

export function pipelineObjectProps(pipelineObjectPropsProps: PipelineObjectProps): PipelineObjectProps { return (pipelineObjectPropsProps) as unknown as PipelineObjectProps }

export interface PipelineObjectProps {
    fields: FieldProps[];
    id: Value<string>;
    name: Value<string>;
}