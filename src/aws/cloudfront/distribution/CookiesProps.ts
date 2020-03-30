import { Value } from '../../../kloudformation/Value';

export function cookiesProps(cookiesPropsProps: CookiesProps): CookiesProps { return (cookiesPropsProps) as unknown as CookiesProps }

export interface CookiesProps {
    forward: Value<string>;
    whitelistedNames?: Value<Value<string>[]>;
}