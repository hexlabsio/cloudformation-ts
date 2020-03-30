import { Value } from '../../../kloudformation/Value';

export function placementTemplateProps(placementTemplatePropsProps: PlacementTemplateProps): PlacementTemplateProps { return (placementTemplatePropsProps) as unknown as PlacementTemplateProps }

export interface PlacementTemplateProps {
    deviceTemplates?: Value<any>;
    defaultAttributes?: Value<any>;
}