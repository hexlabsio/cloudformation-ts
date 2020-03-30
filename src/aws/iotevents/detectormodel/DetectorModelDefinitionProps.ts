import { StateProps } from './StateProps';
import { Value } from '../../../kloudformation/Value';

export function detectorModelDefinitionProps(detectorModelDefinitionPropsProps: DetectorModelDefinitionProps): DetectorModelDefinitionProps { return (detectorModelDefinitionPropsProps) as unknown as DetectorModelDefinitionProps }

export interface DetectorModelDefinitionProps {
    states?: StateProps[];
    initialStateName?: Value<string>;
}