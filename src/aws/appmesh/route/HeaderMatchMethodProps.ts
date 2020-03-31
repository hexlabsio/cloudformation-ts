import { Value } from '../../../kloudformation/Value';
import { MatchRangeProps } from './MatchRangeProps';

export function headerMatchMethodProps(headerMatchMethodPropsProps: HeaderMatchMethodProps): HeaderMatchMethodProps { return (headerMatchMethodPropsProps) }

export interface HeaderMatchMethodProps {
    suffix?: Value<string>;
    regex?: Value<string>;
    exact?: Value<string>;
    prefix?: Value<string>;
    range?: MatchRangeProps;
}