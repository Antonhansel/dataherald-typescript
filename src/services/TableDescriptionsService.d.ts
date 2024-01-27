import type { ScannerRequest } from '../models/ScannerRequest';
import type { TableDescriptionRequest } from '../models/TableDescriptionRequest';
import type { TableDescriptionResponse } from '../models/TableDescriptionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TableDescriptionsService {
    /**
     * Scan Db
     * @param requestBody
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    static scanDb(requestBody: ScannerRequest): CancelablePromise<Array<TableDescriptionResponse>>;
    /**
     * Get Table Description
     * Get description
     * @param tableDescriptionId
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    static getTableDescription(tableDescriptionId: string): CancelablePromise<TableDescriptionResponse>;
    /**
     * Update Table Description
     * Add descriptions for tables and columns
     * @param tableDescriptionId
     * @param requestBody
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    static updateTableDescription(tableDescriptionId: string, requestBody: TableDescriptionRequest): CancelablePromise<TableDescriptionResponse>;
    /**
     * List Table Descriptions
     * List table descriptions
     * @param dbConnectionId
     * @param tableName
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    static listTableDescriptions(dbConnectionId: string, tableName?: string): CancelablePromise<Array<TableDescriptionResponse>>;
}
