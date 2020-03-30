import { Value } from '../../../kloudformation/Value';

export function onSuccessProps(onSuccessPropsProps: OnSuccessProps): OnSuccessProps { return (onSuccessPropsProps) as unknown as OnSuccessProps }

export interface OnSuccessProps {
    destination: Value<string>;
}