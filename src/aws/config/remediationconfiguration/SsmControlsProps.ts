import { Value } from '../../../kloudformation/Value';

export function ssmControlsProps(ssmControlsPropsProps: SsmControlsProps): SsmControlsProps { return (ssmControlsPropsProps) as unknown as SsmControlsProps }

export interface SsmControlsProps {
    errorPercentage?: Value<number>;
    concurrentExecutionRatePercentage?: Value<number>;
}