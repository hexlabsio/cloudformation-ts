import { Value } from '../../../kloudformation/Value';
import { QueryProps } from './QueryProps';

export function resourceQueryProps(resourceQueryPropsProps: ResourceQueryProps): ResourceQueryProps { return (resourceQueryPropsProps) }

export interface ResourceQueryProps {
    type?: Value<string>;
    query?: QueryProps;
}