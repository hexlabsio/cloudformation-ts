import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function certificate(certificateProps: Certificate & { logicalName?: string }): Certificate { return ({ ...certificateProps, _logicalType: 'AWS::ACMPCA::Certificate' }) as unknown as Certificate }

export interface Certificate extends KloudResource {
    certificateAuthorityArn: Value<string>;
    certificateSigningRequest: Value<string>;
    signingAlgorithm: Value<string>;
    validity: Value<any>;
    templateArn?: Value<string>;
}