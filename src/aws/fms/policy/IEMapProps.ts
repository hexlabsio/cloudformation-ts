import { Value } from '../../../kloudformation/Value';

export function iEMapProps(iEMapPropsProps: IEMapProps): IEMapProps { return (iEMapPropsProps) as unknown as IEMapProps }

export interface IEMapProps {
    aCCOUNT?: Value<Value<string>[]>;
}