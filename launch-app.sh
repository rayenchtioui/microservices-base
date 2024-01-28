oc create -f k8s/email.yaml
oc new-app --template email-template
oc create secret generic my-secret --from-env-file=services/email/.env
oc set env --from=secret/email-secret dc/email
