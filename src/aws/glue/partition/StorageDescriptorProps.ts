import { Value } from '../../../kloudformation/Value';
import { SkewedInfoProps } from './SkewedInfoProps';
import { ColumnProps } from './ColumnProps';
import { SerdeInfoProps } from './SerdeInfoProps';
import { OrderProps } from './OrderProps';

export function storageDescriptorProps(storageDescriptorPropsProps: StorageDescriptorProps): StorageDescriptorProps { return (storageDescriptorPropsProps) as unknown as StorageDescriptorProps }

export interface StorageDescriptorProps {
    storedAsSubDirectories?: Value<boolean>;
    parameters?: Value<any>;
    bucketColumns?: Value<Value<string>[]>;
    skewedInfo?: SkewedInfoProps;
    inputFormat?: Value<string>;
    numberOfBuckets?: Value<number>;
    outputFormat?: Value<string>;
    columns?: ColumnProps[];
    serdeInfo?: SerdeInfoProps;
    sortColumns?: OrderProps[];
    compressed?: Value<boolean>;
    location?: Value<string>;
}