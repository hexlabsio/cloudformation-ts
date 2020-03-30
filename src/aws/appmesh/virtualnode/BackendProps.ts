import { VirtualServiceBackendProps } from './VirtualServiceBackendProps';

export function backendProps(backendPropsProps: BackendProps): BackendProps { return (backendPropsProps) as unknown as BackendProps }

export interface BackendProps {
    virtualService?: VirtualServiceBackendProps;
}