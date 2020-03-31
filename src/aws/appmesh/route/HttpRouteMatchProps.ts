import { Value } from '../../../kloudformation/Value';
import { HttpRouteHeaderProps } from './HttpRouteHeaderProps';

export function httpRouteMatchProps(httpRouteMatchPropsProps: HttpRouteMatchProps): HttpRouteMatchProps { return (httpRouteMatchPropsProps) }

export interface HttpRouteMatchProps {
    prefix: Value<string>;
    scheme?: Value<string>;
    headers?: HttpRouteHeaderProps[];
    method?: Value<string>;
}