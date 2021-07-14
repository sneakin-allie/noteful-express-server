module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || '10a204b0-42c3-455c-b85b-1390eb68eb3f',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://byolcnqckxsnsg:38eef48995160e0ccd6b4a9ae474905df5e44cd79fa0babab0f6acc5a669ec64@ec2-35-168-145-180.compute-1.amazonaws.com:5432/d3stu7qdn59n71',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://fathomless-plateau-60580.herokuapp.com'
}