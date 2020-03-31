import { Value } from '../../../kloudformation/Value';
import { OriginGroupProps } from './OriginGroupProps';

export function originGroupsProps(originGroupsPropsProps: OriginGroupsProps): OriginGroupsProps { return (originGroupsPropsProps) }

export interface OriginGroupsProps {
    quantity: Value<number>;
    items?: OriginGroupProps[];
}