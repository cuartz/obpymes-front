mkdir .tmp
mkdir .tmp/os
mkdir .tmp/os/html
mkdir .tmp/os/conf.d

cp -R dist/* .tmp/os/html
cp nginx/nginx.conf .tmp/os/conf.d/default.conf

pushd .tmp/os
tar -cvzf ../${JOB_NAME}-${BUILD_NUMBER}.tgz *
popd