import type { FileStorage } from './FileStorage';
import type { SSHSettings } from './SSHSettings';
export type DatabaseConnectionRequest = {
    alias: string;
    use_ssh?: boolean;
    connection_uri?: string;
    path_to_credentials_file?: string;
    llm_api_key?: string;
    ssh_settings?: SSHSettings;
    file_storage?: FileStorage;
    metadata?: Record<string, any>;
};
