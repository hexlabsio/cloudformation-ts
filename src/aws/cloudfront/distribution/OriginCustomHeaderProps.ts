import { Value } from '../../../kloudformation/Value';

export function originCustomHeaderProps(originCustomHeaderPropsProps: OriginCustomHeaderProps): OriginCustomHeaderProps { return (originCustomHeaderPropsProps) }

export interface OriginCustomHeaderProps {
    headerValue: Value<string>;
    headerName: Value<string>;
}