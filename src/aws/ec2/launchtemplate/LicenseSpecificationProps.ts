import { Value } from '../../../kloudformation/Value';

export function licenseSpecificationProps(licenseSpecificationPropsProps: LicenseSpecificationProps): LicenseSpecificationProps { return (licenseSpecificationPropsProps) as unknown as LicenseSpecificationProps }

export interface LicenseSpecificationProps {
    licenseConfigurationArn?: Value<string>;
}