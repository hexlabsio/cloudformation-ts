import { EgressFilterProps } from './EgressFilterProps';

export function meshSpecProps(meshSpecPropsProps: MeshSpecProps): MeshSpecProps { return (meshSpecPropsProps) as unknown as MeshSpecProps }

export interface MeshSpecProps {
    egressFilter?: EgressFilterProps;
}