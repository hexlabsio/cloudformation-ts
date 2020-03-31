import { Value } from '../../../kloudformation/Value';

export function sSESpecificationProps(sSESpecificationPropsProps: SSESpecificationProps): SSESpecificationProps { return (sSESpecificationPropsProps) }

export interface SSESpecificationProps {
    sSEEnabled: Value<boolean>;
    kMSMasterKeyId?: Value<string>;
    sSEType?: Value<string>;
}