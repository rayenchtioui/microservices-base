get_env() {
  oc get secret postgresql -o jsonpath="{.data.$1}" | base64 -d
}

oc delete imagestream,buildconfig,deploymentconfig,service,routes {product,user,client,api-gateway,email}
oc delete secret email-secret


oc create -f k8s/email.yaml
oc create -f k8s/user.yaml
oc create -f k8s/product.yaml
oc create -f k8s/client.yaml
oc create -f k8s/api-gateway.yaml 


oc new-app --template email api-gateway 
oc new-app --template client product user --build-env=DATABASE_URL="postgresql://$(get_env database-username):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public"\
  --env=DATABASE_URL="postgresql://$(get_env database-username):$(get_env database-password)@postgresql:5432/$(get_env database-name)?schema=public"
oc set env --from=secret/email-secret dc/email
oc create secret generic my-secret --from-env-file=services/email/.env
oc set env --from=secret/email-secret dc/email
