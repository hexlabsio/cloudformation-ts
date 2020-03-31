import { EventProps } from './EventProps';

export function onExitProps(onExitPropsProps: OnExitProps): OnExitProps { return (onExitPropsProps) }

export interface OnExitProps {
    events?: EventProps[];
}