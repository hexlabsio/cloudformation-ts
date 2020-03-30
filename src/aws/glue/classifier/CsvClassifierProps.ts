import { Value } from '../../../kloudformation/Value';

export function csvClassifierProps(csvClassifierPropsProps: CsvClassifierProps): CsvClassifierProps { return (csvClassifierPropsProps) as unknown as CsvClassifierProps }

export interface CsvClassifierProps {
    quoteSymbol?: Value<string>;
    containsHeader?: Value<string>;
    delimiter?: Value<string>;
    header?: Value<Value<string>[]>;
    allowSingleColumn?: Value<boolean>;
    disableValueTrimming?: Value<boolean>;
    name?: Value<string>;
}