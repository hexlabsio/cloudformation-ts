import { Value } from '../../../kloudformation/Value';

export function actionTypeIdProps(actionTypeIdPropsProps: ActionTypeIdProps): ActionTypeIdProps { return (actionTypeIdPropsProps) }

export interface ActionTypeIdProps {
    category: Value<string>;
    owner: Value<string>;
    provider: Value<string>;
    version: Value<string>;
}