import { Value } from '../../../kloudformation/Value';

export function physicalConnectionRequirementsProps(physicalConnectionRequirementsPropsProps: PhysicalConnectionRequirementsProps): PhysicalConnectionRequirementsProps { return (physicalConnectionRequirementsPropsProps) as unknown as PhysicalConnectionRequirementsProps }

export interface PhysicalConnectionRequirementsProps {
    availabilityZone?: Value<string>;
    securityGroupIdList?: Value<Value<string>[]>;
    subnetId?: Value<string>;
}