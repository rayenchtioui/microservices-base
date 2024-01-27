oc set triggers bc {product,client,user,email,api-gateway} --from-github
oc describe bc/{product,client,user,email,api-gateway}