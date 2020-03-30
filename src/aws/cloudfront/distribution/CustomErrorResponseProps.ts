import { Value } from '../../../kloudformation/Value';

export function customErrorResponseProps(customErrorResponsePropsProps: CustomErrorResponseProps): CustomErrorResponseProps { return (customErrorResponsePropsProps) as unknown as CustomErrorResponseProps }

export interface CustomErrorResponseProps {
    errorCode: Value<number>;
    responseCode?: Value<number>;
    errorCachingMinTTL?: Value<number>;
    responsePagePath?: Value<string>;
}