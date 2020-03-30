import { Value } from '../../../kloudformation/Value';
import { AuthorizationConfigProps } from './AuthorizationConfigProps';

export function httpConfigProps(httpConfigPropsProps: HttpConfigProps): HttpConfigProps { return (httpConfigPropsProps) as unknown as HttpConfigProps }

export interface HttpConfigProps {
    endpoint: Value<string>;
    authorizationConfig?: AuthorizationConfigProps;
}