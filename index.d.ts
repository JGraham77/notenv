export = Notenv;

declare namespace Notenv {
    /**
     * 
     * @param path Either undefined to be `.env` at the root of your project, or defined to a spearately located file
     * 
     * ```js
     * import notenv from '@jgraham77/notenv'
     * notenv.config();
     * 
     * notenv.config(path.join(__dirname, '../path/to/file.env'))
     * 
     * const DB_URL = process.env.DATABASE_URL
     * ```
     */
    export function config (path?: string): void
};