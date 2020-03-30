import { EventProps } from './EventProps';

export function onExitProps(onExitPropsProps: OnExitProps): OnExitProps { return (onExitPropsProps) as unknown as OnExitProps }

export interface OnExitProps {
    events?: EventProps[];
}