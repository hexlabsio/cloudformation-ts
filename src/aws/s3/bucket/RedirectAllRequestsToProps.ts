import { Value } from '../../../kloudformation/Value';

export function redirectAllRequestsToProps(redirectAllRequestsToPropsProps: RedirectAllRequestsToProps): RedirectAllRequestsToProps { return (redirectAllRequestsToPropsProps) as unknown as RedirectAllRequestsToProps }

export interface RedirectAllRequestsToProps {
    hostName: Value<string>;
    protocol?: Value<string>;
}