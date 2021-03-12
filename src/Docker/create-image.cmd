docker build --no-cache -f SQL\Dockerfile.PostgreSql -t musicschool/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t musicschool/app ../..
