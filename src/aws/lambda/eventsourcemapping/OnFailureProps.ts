import { Value } from '../../../kloudformation/Value';

export function onFailureProps(onFailurePropsProps: OnFailureProps): OnFailureProps { return (onFailurePropsProps) }

export interface OnFailureProps {
    destination: Value<string>;
}