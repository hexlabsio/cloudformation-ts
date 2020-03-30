import { InputProps } from '../../kinesisanalytics/application/InputProps';

export function sqlApplicationConfigurationProps(sqlApplicationConfigurationPropsProps: SqlApplicationConfigurationProps): SqlApplicationConfigurationProps { return (sqlApplicationConfigurationPropsProps) as unknown as SqlApplicationConfigurationProps }

export interface SqlApplicationConfigurationProps {
    inputs?: InputProps[];
}