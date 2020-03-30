import { Value } from '../../../kloudformation/Value';

export function onFailureProps(onFailurePropsProps: OnFailureProps): OnFailureProps { return (onFailurePropsProps) as unknown as OnFailureProps }

export interface OnFailureProps {
    destination: Value<string>;
}