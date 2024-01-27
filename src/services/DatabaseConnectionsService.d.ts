import type { DatabaseConnection } from '../models/DatabaseConnection';
import type { DatabaseConnectionRequest } from '../models/DatabaseConnectionRequest';
import type { DatabaseConnectionResponse } from '../models/DatabaseConnectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DatabaseConnectionsService {
    /**
     * List Database Connections
     * List all database connections
     * @returns DatabaseConnection Successful Response
     * @throws ApiError
     */
    static listDatabaseConnections(): CancelablePromise<Array<DatabaseConnection>>;
    /**
     * Create Database Connection
     * Creates a database connection
     * @param requestBody
     * @returns DatabaseConnectionResponse Successful Response
     * @throws ApiError
     */
    static createDatabaseConnection(requestBody: DatabaseConnectionRequest): CancelablePromise<DatabaseConnectionResponse>;
    /**
     * Update Database Connection
     * Creates a database connection
     * @param dbConnectionId
     * @param requestBody
     * @returns DatabaseConnection Successful Response
     * @throws ApiError
     */
    static updateDatabaseConnection(dbConnectionId: string, requestBody: DatabaseConnectionRequest): CancelablePromise<DatabaseConnection>;
}
