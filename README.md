# angular-ex2

This project is an example of an angular application prepared to be deployed on Openshift using Produban nginx image 

It was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Package

Running `./build_ose.sh` generates a package in .tmp/ creating the name with this format `${JOB_NAME}-${BUILD_NUMBER}.tgz` 

In Jenkins it will take `JOB_NAME` and `BUILD_NUMBER` from the job execution.
If you want to execute locally set this variables before running the script.

Example

    export JOB_NAME="angularexample"
  
    export BUILD_NUMBER=2

In Windows
