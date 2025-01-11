declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        API_URL: string;
        DATABASE_URL: string;
        PORT?: string; 
    }
}