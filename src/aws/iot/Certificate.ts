import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function certificate(certificateProps: Certificate & { logicalName?: string }): Certificate { return ({ ...certificateProps, _logicalType: 'AWS::IoT::Certificate' }) as unknown as Certificate }

export interface Certificate extends KloudResource {
    certificateSigningRequest: Value<string>;
    status: Value<string>;
}