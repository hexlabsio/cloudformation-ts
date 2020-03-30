import { Value } from '../../../kloudformation/Value';

export function containerDefinitionProps(containerDefinitionPropsProps: ContainerDefinitionProps): ContainerDefinitionProps { return (containerDefinitionPropsProps) as unknown as ContainerDefinitionProps }

export interface ContainerDefinitionProps {
    image: Value<string>;
    containerHostname?: Value<string>;
    mode?: Value<string>;
    environment?: Value<any>;
    modelDataUrl?: Value<string>;
}