import { Value } from '../../../kloudformation/Value';

export function physicalConnectionRequirementsProps(physicalConnectionRequirementsPropsProps: PhysicalConnectionRequirementsProps): PhysicalConnectionRequirementsProps { return (physicalConnectionRequirementsPropsProps) }

export interface PhysicalConnectionRequirementsProps {
    availabilityZone?: Value<string>;
    securityGroupIdList?: Value<Value<string>[]>;
    subnetId?: Value<string>;
}