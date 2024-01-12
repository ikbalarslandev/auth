/**
 * An array of routes that are public
 * These routes do not require authentication
 * type: {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that require authentication
 * These routes will redirect logged in users to /settigs page
 * type: {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * These routes will redirect logged in users to /settigs page
 * type: {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
