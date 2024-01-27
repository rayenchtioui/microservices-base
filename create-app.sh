oc delete imagestream,buildconfig,deploymentconfig,service {product,user,client,api-gateway,email}
oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --name api-gateway --context-dir api-gateway
oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --name product --context-dir services/product
oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --name client --context-dir services/client
oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --name user --context-dir services/user
oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --name email --context-dir services/email