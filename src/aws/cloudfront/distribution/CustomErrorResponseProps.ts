import { Value } from '../../../kloudformation/Value';

export function customErrorResponseProps(customErrorResponsePropsProps: CustomErrorResponseProps): CustomErrorResponseProps { return (customErrorResponsePropsProps) }

export interface CustomErrorResponseProps {
    errorCode: Value<number>;
    responseCode?: Value<number>;
    errorCachingMinTTL?: Value<number>;
    responsePagePath?: Value<string>;
}