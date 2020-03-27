
export default class ConcurrenceUtil {
  /**
   * 并发执行工作（注意：对CPU密集型工作无效）
   * @param work 要执行的工作。i是工作的索引  0 <= i < totalCount
   * @param coCount 每批并发执行多少个
   * @param totalCount 总共要执行多少个
   */
  static async coDoWork (work: (i: number) => Promise<void>, coCount: number, totalCount: number) {
    let batchEnd = 0
    let batchStart = 0
    while (batchEnd < totalCount) {
      batchEnd = batchStart + coCount
      if (batchEnd > totalCount) {
        batchEnd = totalCount
      }
      const batchPromises = []
      for (let i = batchStart; i < batchEnd; i++) {
        batchPromises.push(work(i))
      }
      await Promise.all(batchPromises)
      batchStart = batchEnd
    }
  }
}
