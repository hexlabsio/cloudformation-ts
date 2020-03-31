import { EgressFilterProps } from './EgressFilterProps';

export function meshSpecProps(meshSpecPropsProps: MeshSpecProps): MeshSpecProps { return (meshSpecPropsProps) }

export interface MeshSpecProps {
    egressFilter?: EgressFilterProps;
}