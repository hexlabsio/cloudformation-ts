import { Value } from '../../../kloudformation/Value';

export function provisioningParameterProps(provisioningParameterPropsProps: ProvisioningParameterProps): ProvisioningParameterProps { return (provisioningParameterPropsProps) as unknown as ProvisioningParameterProps }

export interface ProvisioningParameterProps {
    value?: Value<string>;
    key?: Value<string>;
}