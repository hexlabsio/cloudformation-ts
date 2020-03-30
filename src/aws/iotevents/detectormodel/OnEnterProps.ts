import { EventProps } from './EventProps';

export function onEnterProps(onEnterPropsProps: OnEnterProps): OnEnterProps { return (onEnterPropsProps) as unknown as OnEnterProps }

export interface OnEnterProps {
    events?: EventProps[];
}