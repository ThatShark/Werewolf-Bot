import { Manager } from './Base.js';

class VoteManager extends Manager {
    /**
     * 設定投票狀態
     * @param {Player} player 投票player instance
     * @param {Player} target 目標玩家
     * @return {Number} count of total votes
     */
    setState(player, target) {
        this.add(player.id, target);
        return this.length; // ????????????
    }

    get result() {
        const eachCount = {};

        let maxCount = 0;
        let res;
        for (const target of this.values) { // 找到最多票的玩家
            const id = target.id;

            if (eachCount[id]) {
                eachCount[id]++;
            } else {
                eachCount[id] = 1;
            }

            if (eachCount[id] > maxCount) {
                maxCount = eachCount[id];
                res = target;
            }
        }

        // 附註：可以隨機選 / 重新投
        // 目前是隨機選

        return res;
    }
}

export {
    VoteManager
};
