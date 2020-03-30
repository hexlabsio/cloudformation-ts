import { Value } from '../../../kloudformation/Value';

export function certificateConfigurationProps(certificateConfigurationPropsProps: CertificateConfigurationProps): CertificateConfigurationProps { return (certificateConfigurationPropsProps) as unknown as CertificateConfigurationProps }

export interface CertificateConfigurationProps {
    certificateType: Value<string>;
}