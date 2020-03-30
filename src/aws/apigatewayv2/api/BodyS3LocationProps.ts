import { Value } from '../../../kloudformation/Value';

export function bodyS3LocationProps(bodyS3LocationPropsProps: BodyS3LocationProps): BodyS3LocationProps { return (bodyS3LocationPropsProps) as unknown as BodyS3LocationProps }

export interface BodyS3LocationProps {
    etag?: Value<string>;
    bucket?: Value<string>;
    version?: Value<string>;
    key?: Value<string>;
}