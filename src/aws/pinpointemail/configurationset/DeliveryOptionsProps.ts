import { Value } from '../../../kloudformation/Value';

export function deliveryOptionsProps(deliveryOptionsPropsProps: DeliveryOptionsProps): DeliveryOptionsProps { return (deliveryOptionsPropsProps) as unknown as DeliveryOptionsProps }

export interface DeliveryOptionsProps {
    sendingPoolName?: Value<string>;
}