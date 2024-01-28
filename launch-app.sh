get_env() {
  oc get secret postgresql -o jsonpath="{.data.$1}" | base64 -d
}

oc delete imagestream,buildconfig,deploymentconfig,service,routes {product,user,client,api-gateway,email}
oc delete template {product,user,client,api-gateway,email}-template
oc delete secret email-secret


oc create -f k8s/email.yaml
oc create -f k8s/user.yaml
oc create -f k8s/product.yaml
oc create -f k8s/client.yaml
oc create -f k8s/api-gateway.yaml 

oc create secret generic email-secret --from-env-file=services/email/.env

oc new-app --template client-template product-template user-template --build-env=DATABASE_URL="postgresql://$(get_env database-username):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public"\
  --env=DATABASE_URL="postgresql://$(get_env database-username):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public"
oc new-app --template api-gateway-template email-template 

oc set env --from=secret/email-secret dc/email
oc set env --from=secret/email-secret dc/email
