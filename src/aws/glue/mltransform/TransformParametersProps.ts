import { Value } from '../../../kloudformation/Value';
import { FindMatchesParametersProps } from './FindMatchesParametersProps';

export function transformParametersProps(transformParametersPropsProps: TransformParametersProps): TransformParametersProps { return (transformParametersPropsProps) as unknown as TransformParametersProps }

export interface TransformParametersProps {
    transformType: Value<string>;
    findMatchesParameters?: FindMatchesParametersProps;
}