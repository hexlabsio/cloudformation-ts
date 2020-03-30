import { ClientPolicyProps } from './ClientPolicyProps';

export function backendDefaultsProps(backendDefaultsPropsProps: BackendDefaultsProps): BackendDefaultsProps { return (backendDefaultsPropsProps) as unknown as BackendDefaultsProps }

export interface BackendDefaultsProps {
    clientPolicy?: ClientPolicyProps;
}