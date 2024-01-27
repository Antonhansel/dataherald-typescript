import type { GoldenSQL } from '../models/GoldenSQL';
import type { GoldenSQLRequest } from '../models/GoldenSQLRequest';
import type { GoldenSQLResponse } from '../models/GoldenSQLResponse';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class GoldenSqLsService {
    /**
     * Update Golden Sql
     * Gets golden sqls
     * @param goldenSqlId
     * @param requestBody
     * @returns GoldenSQL Successful Response
     * @throws ApiError
     */
    static updateGoldenSql(goldenSqlId: string, requestBody: UpdateMetadataRequest): CancelablePromise<GoldenSQL>;
    /**
     * Delete Golden Sql
     * Deletes a golden record
     * @param goldenSqlId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteGoldenSql(goldenSqlId: string): CancelablePromise<Record<string, any>>;
    /**
     * Get Golden Sqls
     * Gets golden sqls
     * @param dbConnectionId
     * @param page
     * @param limit
     * @returns GoldenSQL Successful Response
     * @throws ApiError
     */
    static getGoldenSqls(dbConnectionId?: string, page?: number, limit?: number): CancelablePromise<Array<GoldenSQL>>;
    /**
     * Add Golden Sqls
     * @param requestBody
     * @returns GoldenSQLResponse Successful Response
     * @throws ApiError
     */
    static addGoldenSqls(requestBody: Array<GoldenSQLRequest>): CancelablePromise<Array<GoldenSQLResponse>>;
}
