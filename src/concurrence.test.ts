import assert from "assert"
import ConcurrenceUtil from "./concurrence";
import TimeUtil from '@pefish/js-util-time';

describe('ConcurrenceUtil', () => {

  it('coDoWork', async () => {
    try {
      let sum = 0
      await ConcurrenceUtil.coDoWork(async (i: number) => {
        await TimeUtil.sleep(100)
        sum += i
        // console.log(i, sum)
        // ... 这里应该是网络IO或文件IO
      }, 10, 100)
      // console.log(`sum: ${sum}`)
      assert.strictEqual(sum, 4950)
    } catch (err) {
      console.error(err)
      assert.throws(() => {}, err)
    }
  })
})

