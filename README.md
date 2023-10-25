# cehelloworld
Code Engine hello world example


1. `ibmcloud login --sso`
select Resource Group:
`ibmcloud target -g RESOURCE_GROUP_NAME`
create a CE Project Approval Flow; select it
`ibmcloud ce project select -n 'Approval Flow'`
2. `ibmcloud ce fn create --name approvalfn-local --runtime nodejs-18 --build-source main.js`

3. details: `ibmcloud ce function get -n approvalfn-local`
4. call the url: `curl https://` 

if you need to update the function later - use `update` instead of `create`:
`ibmcloud ce fn update --name approvalfn-local --runtime nodejs-18 --build-source main.js`