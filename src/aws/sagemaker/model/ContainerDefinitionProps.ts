import { Value } from '../../../kloudformation/Value';

export interface ContainerDefinitionProps {
  containerHostname?: Value<string>
  modelPackageName?: Value<string>
  mode?: Value<string>
  environment?: Value<any>
  modelDataUrl?: Value<string>
  image?: Value<string>
}