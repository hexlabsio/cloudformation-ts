import { Value } from '../../../kloudformation/Value';
import { QueryProps } from './QueryProps';

export function resourceQueryProps(resourceQueryPropsProps: ResourceQueryProps): ResourceQueryProps { return (resourceQueryPropsProps) as unknown as ResourceQueryProps }

export interface ResourceQueryProps {
    type?: Value<string>;
    query?: QueryProps;
}