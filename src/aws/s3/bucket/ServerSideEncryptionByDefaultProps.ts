import { Value } from '../../../kloudformation/Value';

export function serverSideEncryptionByDefaultProps(serverSideEncryptionByDefaultPropsProps: ServerSideEncryptionByDefaultProps): ServerSideEncryptionByDefaultProps { return (serverSideEncryptionByDefaultPropsProps) as unknown as ServerSideEncryptionByDefaultProps }

export interface ServerSideEncryptionByDefaultProps {
    sSEAlgorithm: Value<string>;
    kMSMasterKeyID?: Value<string>;
}