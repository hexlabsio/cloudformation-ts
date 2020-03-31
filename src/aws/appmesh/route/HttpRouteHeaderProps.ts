import { Value } from '../../../kloudformation/Value';
import { HeaderMatchMethodProps } from './HeaderMatchMethodProps';

export function httpRouteHeaderProps(httpRouteHeaderPropsProps: HttpRouteHeaderProps): HttpRouteHeaderProps { return (httpRouteHeaderPropsProps) }

export interface HttpRouteHeaderProps {
    name: Value<string>;
    invert?: Value<boolean>;
    match?: HeaderMatchMethodProps;
}