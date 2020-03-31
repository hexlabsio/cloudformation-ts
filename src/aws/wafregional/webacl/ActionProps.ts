import { Value } from '../../../kloudformation/Value';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) }

export interface ActionProps {
    type: Value<string>;
}