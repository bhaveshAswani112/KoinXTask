declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        API_KEY: string;
        DATABASE_URL: string;
        PORT: string; 
        DB_NAME: string;
    }
}