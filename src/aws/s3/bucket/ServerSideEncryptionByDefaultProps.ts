import { Value } from '../../../kloudformation/Value';

export function serverSideEncryptionByDefaultProps(serverSideEncryptionByDefaultPropsProps: ServerSideEncryptionByDefaultProps): ServerSideEncryptionByDefaultProps { return (serverSideEncryptionByDefaultPropsProps) }

export interface ServerSideEncryptionByDefaultProps {
    sSEAlgorithm: Value<string>;
    kMSMasterKeyID?: Value<string>;
}