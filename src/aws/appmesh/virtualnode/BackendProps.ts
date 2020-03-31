import { VirtualServiceBackendProps } from './VirtualServiceBackendProps';

export function backendProps(backendPropsProps: BackendProps): BackendProps { return (backendPropsProps) }

export interface BackendProps {
    virtualService?: VirtualServiceBackendProps;
}