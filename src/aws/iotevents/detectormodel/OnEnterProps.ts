import { EventProps } from './EventProps';

export function onEnterProps(onEnterPropsProps: OnEnterProps): OnEnterProps { return (onEnterPropsProps) }

export interface OnEnterProps {
    events?: EventProps[];
}