import { Value } from '../../../kloudformation/Value';

export function sendingOptionsProps(sendingOptionsPropsProps: SendingOptionsProps): SendingOptionsProps { return (sendingOptionsPropsProps) }

export interface SendingOptionsProps {
    sendingEnabled?: Value<boolean>;
}