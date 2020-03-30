import { Value } from '../../../kloudformation/Value';

export function spotProvisioningSpecificationProps(spotProvisioningSpecificationPropsProps: SpotProvisioningSpecificationProps): SpotProvisioningSpecificationProps { return (spotProvisioningSpecificationPropsProps) as unknown as SpotProvisioningSpecificationProps }

export interface SpotProvisioningSpecificationProps {
    timeoutAction: Value<string>;
    timeoutDurationMinutes: Value<number>;
    blockDurationMinutes?: Value<number>;
}