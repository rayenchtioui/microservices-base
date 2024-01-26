oc delete imagestream,buildconfig,deployment,service {product,user,client,api-gateway}
oc new-app https://github.com/rayenchtioui/microservices-base --name api-gateway --context-dir api-gateway
oc new-app https://github.com/rayenchtioui/microservices-base --name product --context-dir services/product
oc new-app https://github.com/rayenchtioui/microservices-base --name client --context-dir services/client
oc new-app https://github.com/rayenchtioui/microservices-base --name user --context-dir services/user

