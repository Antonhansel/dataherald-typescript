import type { QueryHistory } from '../models/QueryHistory';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class QueryHistoryService {
    /**
     * Get Query History
     * Get description
     * @param dbConnectionId
     * @returns QueryHistory Successful Response
     * @throws ApiError
     */
    static getQueryHistory(dbConnectionId: string): CancelablePromise<Array<QueryHistory>>;
}
