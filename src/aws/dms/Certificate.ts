import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function certificate(certificateProps: Certificate & { logicalName?: string }): Certificate { return ({ ...certificateProps, _logicalType: 'AWS::DMS::Certificate' }) as unknown as Certificate }

export interface Certificate extends KloudResource {
    certificateIdentifier?: Value<string>;
    certificatePem?: Value<string>;
    certificateWallet?: Value<string>;
}