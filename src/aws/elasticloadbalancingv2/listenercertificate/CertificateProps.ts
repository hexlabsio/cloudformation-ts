import { Value } from '../../../kloudformation/Value';

export function certificateProps(certificatePropsProps: CertificateProps): CertificateProps { return (certificatePropsProps) }

export interface CertificateProps {
    certificateArn?: Value<string>;
}