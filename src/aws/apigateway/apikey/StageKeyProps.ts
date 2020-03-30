import { Value } from '../../../kloudformation/Value';

export function stageKeyProps(stageKeyPropsProps: StageKeyProps): StageKeyProps { return (stageKeyPropsProps) as unknown as StageKeyProps }

export interface StageKeyProps {
    restApiId?: Value<string>;
    stageName?: Value<string>;
}