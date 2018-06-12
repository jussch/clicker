/**
 * Created by Justin on 6/11/2018.
 */
import { startTurn } from '../actions/BattleActions';
import createIntervalLoop from './utilities/createIntervalLoop';
import collectBattleTriggers from './battle/collectBattleTriggers';
import { selectPlayer } from '../selectors/PlayerSelectors';
import { applyAction } from '../actions/BattleActions';

const BATTLE_TIMER = 0.5;

export default function triggerAutoBattle({ getState, dispatch }) {
  const state = getState();
  const player = selectPlayer(state);

  const battleTriggers = collectBattleTriggers(state);
  console.log('battleTriggers:', battleTriggers.toJS());

  let index = 0;
  const cancelAutoBattle = createIntervalLoop(() => {
    if (index >= battleTriggers.size) {
      cancelAutoBattle();
      dispatch(startTurn());
      return;
    }

    const battleTrigger = battleTriggers.get(index);
    if (battleTrigger.isActionTrigger()) {
      dispatch(applyAction({
        targetIds: new Set([player.getId()]),
        action: battleTrigger.get('action'),
        user: battleTrigger.get('user'),
      }));
    } else if (battleTrigger.isEffectTrigger()) {

    }

    index += 1;
  }, BATTLE_TIMER);
}
