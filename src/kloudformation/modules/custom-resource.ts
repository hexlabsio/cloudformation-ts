import { Value } from '../Value';
import { KloudResource } from '../KloudResource';


export function customResource<T>(name: string, groupProps: CustomResourceProperties<T>): CustomResourceProperties<T>  { return ({_nocaps:true, _logicalType: `Custom::${name}`, ...groupProps, }) }

export type CustomResourceProperties<T> = KloudResource & T & {
  ServiceToken?: Value<string>;
}
