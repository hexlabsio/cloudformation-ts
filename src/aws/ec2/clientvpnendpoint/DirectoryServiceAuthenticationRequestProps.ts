import { Value } from '../../../kloudformation/Value';

export function directoryServiceAuthenticationRequestProps(directoryServiceAuthenticationRequestPropsProps: DirectoryServiceAuthenticationRequestProps): DirectoryServiceAuthenticationRequestProps { return (directoryServiceAuthenticationRequestPropsProps) as unknown as DirectoryServiceAuthenticationRequestProps }

export interface DirectoryServiceAuthenticationRequestProps {
    directoryId: Value<string>;
}