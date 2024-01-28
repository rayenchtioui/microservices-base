oc delete imagestream,buildconfig,deploymentconfig,service {product,user,client,api-gateway,email}

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL=$(oc get secret postgresql -o jsonpath='{.data.database-url}' | base64 -d) --name api-gateway --context-dir api-gateway

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL=$(oc get secret postgresql -o jsonpath='{.data.database-url}' | base64 -d) --name product --context-dir services/product
oc set env --from secret/postgresql dc/product

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL=$(oc get secret postgresql -o jsonpath='{.data.database-url}' | base64 -d) --name client --context-dir services/client
oc set env --from secret/postgresql dc/client

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL=$(oc get secret postgresql -o jsonpath='{.data.database-url}' | base64 -d) --name user --context-dir services/user
oc set env --from secret/postgresql dc/user

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL=$(oc get secret postgresql -o jsonpath='{.data.database-url}' | base64 -d) --name email --context-dir services/email

oc expose svc/api-gateway