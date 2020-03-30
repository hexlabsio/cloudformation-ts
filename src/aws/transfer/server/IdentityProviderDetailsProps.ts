import { Value } from '../../../kloudformation/Value';

export function identityProviderDetailsProps(identityProviderDetailsPropsProps: IdentityProviderDetailsProps): IdentityProviderDetailsProps { return (identityProviderDetailsPropsProps) as unknown as IdentityProviderDetailsProps }

export interface IdentityProviderDetailsProps {
    invocationRole: Value<string>;
    url: Value<string>;
}