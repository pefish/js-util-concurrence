export default class ConcurrenceUtil {
    /**
     * 并发执行工作（注意：对CPU密集型工作无效）
     * @param work 要执行的工作。i是工作的索引  0 <= i < totalCount
     * @param coCount 每批并发执行多少个
     * @param totalCount 总共要执行多少个
     */
    static coDoWork(work: (i: number) => Promise<void>, coCount: number, totalCount: number): Promise<void>;
}
