import { Value } from '../../../kloudformation/Value';

export function sendingOptionsProps(sendingOptionsPropsProps: SendingOptionsProps): SendingOptionsProps { return (sendingOptionsPropsProps) as unknown as SendingOptionsProps }

export interface SendingOptionsProps {
    sendingEnabled?: Value<boolean>;
}