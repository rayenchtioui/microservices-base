get_env() {
  oc get secret postgresql -o jsonpath="{.data.$1}" | base64 -d
}

oc delete imagestream,buildconfig,deploymentconfig,service,routes {product,user,client,api-gateway,email}
oc delete template {product,user,client,api-gateway,email}-template
oc delete secret email-secret

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL="postgresql://$(get_env database-user):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public" --name api-gateway --context-dir api-gateway

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL="postgresql://$(get_env database-user):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public" --name product --context-dir services/product
oc set env --from secret/postgresql dc/product

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL="postgresql://$(get_env database-user):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public" --name client --context-dir services/client
oc set env --from secret/postgresql dc/client

oc new-app https://github.com/rayenchtioui/microservices-base  --as-deployment-config=true --build-env=DATABASE_URL="postgresql://$(get_env database-user):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public" --name user --context-dir services/user
oc set env --from secret/postgresql dc/user

oc create -f k8s/email.yaml
oc new-app --template email-template
oc create secret generic email-secret --from-env-file=services/email/.env
oc set env --from=secret/email-secret dc/email

oc create -f k8s/role.yaml
oc create -f k8s/role_binding.yaml

oc expose svc/api-gateway