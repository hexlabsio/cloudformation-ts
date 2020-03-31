import { Value } from '../../../kloudformation/Value';

export function cSVMappingParametersProps(cSVMappingParametersPropsProps: CSVMappingParametersProps): CSVMappingParametersProps { return (cSVMappingParametersPropsProps) }

export interface CSVMappingParametersProps {
    recordRowDelimiter: Value<string>;
    recordColumnDelimiter: Value<string>;
}