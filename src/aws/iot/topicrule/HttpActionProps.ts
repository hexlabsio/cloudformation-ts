import { Value } from '../../../kloudformation/Value';
import { HttpAuthorizationProps } from './HttpAuthorizationProps';
import { HttpActionHeaderProps } from './HttpActionHeaderProps';

export function httpActionProps(httpActionPropsProps: HttpActionProps): HttpActionProps { return (httpActionPropsProps) }

export interface HttpActionProps {
    url: Value<string>;
    auth?: HttpAuthorizationProps;
    confirmationUrl?: Value<string>;
    headers?: HttpActionHeaderProps[];
}