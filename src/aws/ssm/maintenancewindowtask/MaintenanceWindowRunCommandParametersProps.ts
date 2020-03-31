import { Value } from '../../../kloudformation/Value';
import { NotificationConfigProps } from './NotificationConfigProps';

export function maintenanceWindowRunCommandParametersProps(maintenanceWindowRunCommandParametersPropsProps: MaintenanceWindowRunCommandParametersProps): MaintenanceWindowRunCommandParametersProps { return (maintenanceWindowRunCommandParametersPropsProps) }

export interface MaintenanceWindowRunCommandParametersProps {
    timeoutSeconds?: Value<number>;
    comment?: Value<string>;
    outputS3KeyPrefix?: Value<string>;
    parameters?: Value<any>;
    documentHashType?: Value<string>;
    serviceRoleArn?: Value<string>;
    notificationConfig?: NotificationConfigProps;
    outputS3BucketName?: Value<string>;
    documentHash?: Value<string>;
}