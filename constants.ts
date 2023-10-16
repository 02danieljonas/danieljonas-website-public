export const PRODUCTION_API_BASE_URL = "http://localhost:3001";
export const DEVELOPMENT_API_BASE_URL = "http://localhost:3001";

let isDev:boolean;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    isDev = true;
    // dev code
} else {
    isDev = false;
    // production code
}

if (!isDev && PRODUCTION_API_BASE_URL == DEVELOPMENT_API_BASE_URL) {
    console.warn("Production is using localhost");
}

const API_BASE_URL:string = isDev ? DEVELOPMENT_API_BASE_URL : PRODUCTION_API_BASE_URL;

export default API_BASE_URL;
export { isDev };
