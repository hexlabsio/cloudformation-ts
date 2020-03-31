import { SigV4AuthorizationProps } from './SigV4AuthorizationProps';

export function httpAuthorizationProps(httpAuthorizationPropsProps: HttpAuthorizationProps): HttpAuthorizationProps { return (httpAuthorizationPropsProps) }

export interface HttpAuthorizationProps {
    sigv4?: SigV4AuthorizationProps;
}