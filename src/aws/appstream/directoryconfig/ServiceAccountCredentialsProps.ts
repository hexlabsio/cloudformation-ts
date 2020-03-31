import { Value } from '../../../kloudformation/Value';

export function serviceAccountCredentialsProps(serviceAccountCredentialsPropsProps: ServiceAccountCredentialsProps): ServiceAccountCredentialsProps { return (serviceAccountCredentialsPropsProps) }

export interface ServiceAccountCredentialsProps {
    accountName: Value<string>;
    accountPassword: Value<string>;
}