import { OnInputProps } from './OnInputProps';
import { OnExitProps } from './OnExitProps';
import { Value } from '../../../kloudformation/Value';
import { OnEnterProps } from './OnEnterProps';

export interface StateProps {
  onInput?: OnInputProps
  onExit?: OnExitProps
  stateName?: Value<string>
  onEnter?: OnEnterProps
}