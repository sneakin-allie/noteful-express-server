module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    // API_TOKEN: process.env.API_TOKEN || '10a204b0-42c3-455c-b85b-1390eb68eb3f',
    DATABASE_URL: process.env.DATABASE_URL || `postgresql://dunder_mifflin@localhost/noteful`,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || `https://fathomless-plateau-60580.herokuapp.com`
}