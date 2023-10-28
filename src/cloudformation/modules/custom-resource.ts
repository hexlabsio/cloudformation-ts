import { AwsResource } from '../resources/AwsResource';
import { Value } from '../Value';


export function customResource<T, S extends string, A extends string[]>(name: S, properties: CustomResourceProperties<T>, ...attributesNames: A): AwsResource<`Custom::${S}`, CustomResourceProperties<T>, {[K in A[number]]: K}>  {
  return new AwsResource(`Custom::${name}`, properties, attributesNames.reduce((prev, next) => ({...prev, [next]: next}), {} as {[K in A[number]]: K}))
    .disableLowerCase();
}

export type CustomResourceProperties<T> = T & {
  ServiceToken?: Value<string>;
}
