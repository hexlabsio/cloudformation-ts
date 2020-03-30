import { Value } from '../../../kloudformation/Value';

export function hibernationOptionsProps(hibernationOptionsPropsProps: HibernationOptionsProps): HibernationOptionsProps { return (hibernationOptionsPropsProps) as unknown as HibernationOptionsProps }

export interface HibernationOptionsProps {
    configured?: Value<boolean>;
}