import { Value } from '../../../kloudformation/Value';
import { ContainerActionProps } from './ContainerActionProps';
import { QueryActionProps } from './QueryActionProps';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) }

export interface ActionProps {
    actionName: Value<string>;
    containerAction?: ContainerActionProps;
    queryAction?: QueryActionProps;
}