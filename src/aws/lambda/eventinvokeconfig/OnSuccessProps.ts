import { Value } from '../../../kloudformation/Value';

export function onSuccessProps(onSuccessPropsProps: OnSuccessProps): OnSuccessProps { return (onSuccessPropsProps) }

export interface OnSuccessProps {
    destination: Value<string>;
}