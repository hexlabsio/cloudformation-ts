import { OnPremisesTagSetListObjectProps } from './OnPremisesTagSetListObjectProps';

export function onPremisesTagSetProps(onPremisesTagSetPropsProps: OnPremisesTagSetProps): OnPremisesTagSetProps { return (onPremisesTagSetPropsProps) as unknown as OnPremisesTagSetProps }

export interface OnPremisesTagSetProps {
    onPremisesTagSetList?: OnPremisesTagSetListObjectProps[];
}