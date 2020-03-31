import { ClientPolicyProps } from './ClientPolicyProps';

export function backendDefaultsProps(backendDefaultsPropsProps: BackendDefaultsProps): BackendDefaultsProps { return (backendDefaultsPropsProps) }

export interface BackendDefaultsProps {
    clientPolicy?: ClientPolicyProps;
}